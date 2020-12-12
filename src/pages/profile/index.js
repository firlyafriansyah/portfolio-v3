const Profile = () => {
  const element = document.querySelector(".main_content");

  element.innerHTML = `
    <div class="profile">
      <div class="desc_profile">
        <table class="profile_table">
          <tr>
            <th>Nama Lengkap</th>
            <td>: Firly Afriansyah</td>
          </tr>
          <tr>
            <th>Tempat Lahir</th>
            <td>: Bekasi</td>
          </tr>
          <tr>
            <th>Tanggal Lahir</th>
            <td>: 20 April 2000</td>
          </tr>
          <tr>
            <th>Jenis Kelamin</th>
            <td>: Laki - Laki</td>
          </tr>
          <tr>
            <th>Agama</th>
            <td>: Islam</td>
          </tr>
          <tr>
            <th>Alamat Rumah</th>
            <td>: Jl Raya Jegang POJ</td>
          </tr>
          <tr>
            <th>RT / RW</th>
            <td>: 010 / 004</td>
          </tr>
          <tr>
            <th>Kelurahan</th>
            <td>: Bojongmangu</td>
          </tr>
          <tr>
            <th>Kecamatan</th>
            <td>: Bojongmangu</td>
          </tr>
          <tr>
            <th>Kota</th>
            <td>: Kabupaten Bekasi</td>
          </tr>
          <tr>
            <th>Kode POS</th>
            <td>: 17352</td>
          </tr>
          <tr>
            <th>Nomor HP</th>
            <td>: 085695177537</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>: firlyafriansyah50@gmail.com</td>
          </tr>
          <tr>
            <th>Pekerjaan</th>
            <td>: Mahasiswa</td>
          </tr>
        </table>
      </div>
    </div>
  `;
};

export default Profile;
