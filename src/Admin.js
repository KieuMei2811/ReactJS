import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import DataTable from "react-data-table-component";

const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    const [fileUpload, setFileUpload] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8000/api/get-product");
            setProducts(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const previewImage = () => {
        $(document).ready(function (e) {
            $("#inputImage").change(function () {
                let reader = new FileReader();
                reader.onload = (e) => {
                    $("#preview-image-before-upload").attr("src", e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            });
        });
    };

    const previewEditImage = () => {
        $(document).ready(function (e) {
            $("#editImage").change(function () {
                let reader = new FileReader();
                reader.onload = (e) => {
                    $("#preview-image-before-edit").attr("src", e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            });
        });
    };

    const onSubmitHandle = async (e) => {
        e.preventDefault();

        const fd = new FormData();
        fd.append("uploadImage", fileUpload);

        if ($("#inputImage").val().split("\\")[2]) {
            await axios.post(`http://localhost:8000/api/upload-image`, fd);
        }

        try {
            await axios.post("http://localhost:8000/api/add-product", {
                name: $("#inputName").val(),
                id_type: $("#inputType").val(),
                description: $("#inputDescription").val(),
                unit_price: $("#inputPrice").val(),
                promotion_price: $("#inputPromotionPrice").val(),
                image: $("#inputImage").val().split("\\")[2],
                unit: $("#inputUnit").val(),
                new: $("#inputNew").val(),
            });
            $("#inputImage").val("");
            alert("Thêm thành công");
            $("#closeModalAddBtn").click();
            fetchProducts();
        } catch (error) {
            console.log(error);
            alert("Thêm không thành công");
        }
    };

    const deleteProduct = async (id) => {
        if (window.confirm(`Bạn muốn xóa sản phẩm có id là ${id}`)) {
            try {
                await axios.delete(`http://localhost:8000/api/delete-product/${id}`, {});
                alert("Xóa thành công");
                fetchProducts();
            } catch (error) {
                console.log(error);
                alert("Xóa không thành công");
            }
        } else {
            alert("Xóa không thành công");
        }
    };

    const handleChange = (file) => {
        setFileUpload(file[0]);
    };

    const submitEditProduct = async (e) => {
        e.preventDefault();
        const id = $("#editID").val();
        const image =
            $("#editImage").val().split("\\")[2] !== "" &&
                $("#editImage").val().split("\\")[2] !== undefined
                ? $("#editImage").val().split("\\")[2]
                : $("#preview-image-before-edit").attr("src").split("/")[6];

        const fd = new FormData();
        fd.append("uploadImage", fileUpload);

        if ($("#editImage").val().split("\\")[2]) {
            await axios.post(`http://localhost:8000/api/upload-image`, fd);
        }

        try {
            await axios.put(`http://localhost:8000/api/edit-product/${id}`, {
                name: $("#editName").val(),
                id_type: $("#editType").val(),
                description: $("#editDescription").val(),
                unit_price: $("#editPrice").val(),
                promotion_price: $("#editPromotionPrice").val(),
                image: image,
                unit: $("#editUnit").val(),
                new: $("#editNew").val(),
            });
            $("#closeModalEditBtn").click();
            alert("Sửa thành công");
            fetchProducts();
        } catch (error) {
            console.log(error);
            alert("Sửa không thành công");
        }
    };

    const columns = [
        {
            name: "ID",
            selector: "id",
            sortable: true,
        },
        {
            name: "Tên sản phẩm",
            selector: "name",
            sortable: true,
        },
        {
            name: "Loại sản phẩm",
            selector: "id_type",
            sortable: true,
        },
        {
            name: "Đơn giá",
            selector: "unit_price",
            sortable: true,
        },
        {
            name: "Giá khuyến mãi",
            selector: "promotion_price",
            sortable: true,
        },
        {
            name: "Đơn vị",
            selector: "unit",
            sortable: true,
        },
        {
            name: "Hành động",
            cell: (row) => (
                <div>
                    <button
                        className="btn btn-warning btn-sm mr-2"
                        data-toggle="modal"
                        data-target="#editModal"
                        onClick={() => {
                            $("#editID").val(row.id);
                            $("#editName").val(row.name);
                            $("#editType").val(row.id_type);
                            $("#editDescription").val(row.description);
                            $("#editPrice").val(row.unit_price);
                            $("#editPromotionPrice").val(row.promotion_price);
                            $("#editImage").val("");
                            $("#preview-image-before-edit").attr("src", `/images/products/${row.image}`);
                            $("#editUnit").val(row.unit);
                            $("#editNew").val(row.new);
                        }}
                    >
                        Sửa
                    </button>
                    <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteProduct(row.id)}
                    >
                        Xóa
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="container mt-5">
            <h2>Quản lý sản phẩm</h2>

            <button
                className="btn btn-primary mb-3"
                data-toggle="modal"
                data-target="#addModal"
            >
                Thêm sản phẩm
            </button>

            <DataTable
                columns={columns}
                data={products}
                pagination
                highlightOnHover
            />

            {/* Add Modal */}
            <div className="modal fade" id="addModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thêm sản phẩm</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmitHandle}>
                                <div className="form-group">
                                    <label htmlFor="inputName">Tên sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputType">Loại sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputType"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputDescription">Mô tả</label>
                                    <textarea
                                        className="form-control"
                                        id="inputDescription"
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPrice">Đơn giá</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="inputPrice"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPromotionPrice">Giá khuyến mãi</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="inputPromotionPrice"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputImage">Hình ảnh</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="inputImage"
                                        onChange={previewImage}
                                    />
                                    <img
                                        id="preview-image-before-upload"
                                        src=""
                                        alt="Preview"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputUnit">Đơn vị</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputUnit"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputNew">Mới</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="inputNew"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Thêm
                                </button>
                                <button
                                    id="closeModalAddBtn"
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Đóng
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Modal */}
            <div className="modal fade" id="editModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sửa sản phẩm</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submitEditProduct}>
                                <div className="form-group">
                                    <label htmlFor="editName">Tên sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="editName"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editType">Loại sản phẩm</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="editType"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editDescription">Mô tả</label>
                                    <textarea
                                        className="form-control"
                                        id="editDescription"
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editPrice">Đơn giá</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="editPrice"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editPromotionPrice">Giá khuyến mãi</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="editPromotionPrice"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editImage">Hình ảnh</label>
                                    <input
                                        type="file"
                                        className="form-control-file"
                                        id="editImage"
                                        onChange={previewEditImage}
                                    />
                                    <img
                                        id="preview-image-before-edit"
                                        src=""
                                        alt="Preview"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editUnit">Đơn vị</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="editUnit"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editNew">Mới</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="editNew"
                                        required
                                    />
                                </div>
                                <input
                                    type="hidden"
                                    className="form-control"
                                    id="editID"
                                />
                                <button type="submit" className="btn btn-primary">
                                    Sửa
                                </button>
                                <button
                                    id="closeModalEditBtn"
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Đóng
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;
