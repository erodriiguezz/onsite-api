const asyncHandler = require("express-async-handler");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const Document = require("../models/documentModel");

// @desc upload documents
// @route POST /api/documents/upload
// @access private
const uploadDocument = asyncHandler(async (req, res) => {
  const user = req.user.id;
  const { name, description } = req.body;
  const file = req.file.path;

  const slide = Document.create({ user_id: user, name, description, file });

  res.status(201).json(slide);
});

// @desc download documents
// @route GET /api/documents/download
// @access private
const downloadDocument = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await Document.findById(id);

  const filePath = path.join(__dirname, `../${data.file}`);
  res.download(filePath);
});

module.exports = { uploadDocument, downloadDocument };
