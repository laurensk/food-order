function getConnection() {

    var pad = "C:\\Users\\Laurens\\Documents\\FoodOrder.accdb"; // define the correct path of the accdb file.
    var strConn = "driver={Microsoft Access Driver (*.mdb, *.accdb)};dbq=" + pad;
    var cn = new ActiveXObject("ADODB.Connection");
    cn.Open(strConn);
    var rs = new ActiveXObject("ADODB.Recordset");

    var SQL = "SELECT * FROM FOFood";
    rs.Open(SQL, cn);

    var first = true;
    var isBof = false;

    while (!isBof) {
        if (!rs.bof && !isBof) {
            if (first) { rs.MoveFirst(); first = false } else { rs.MoveNext(); }
            if (!rs.eof) {
                renderFood(rs.fields(1).value, rs.fields(2).value, rs.fields(3).value);
            }
        } else {
            isBof = true;
        }
    }
    rs.Close();
    cn.Close();
}

document.addEventListener('DOMContentLoaded', function (event) {
    getConnection();
})