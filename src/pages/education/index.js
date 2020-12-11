const Education = () => {
  const element = document.querySelector(".main_content");

  element.innerHTML = `
  <div class="education">
    <div class="desc_edu">
      <h1>Formal</h1>
      <table>
        <tr>
          <th class="year">2006 - 2012</th>
          <td class="school">
            <strong>SD Negeri Bojongmangu 02</strong>
          </td>
        </tr>
        <tr>
          <th class="year">2012 - 2015</th>
          <td class="school">
            <strong>SMP Negeri 3 Bojongmangu</strong>
          </td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">Anggota OSIS Periode 2013/2014</td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">Wakil Ketua OSIS Periode 2014/2015</td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">Ketua Pramuka Periode 2014/2015</td>
        </tr>
        <tr>
          <th class="year">2015 - 2018</th>
          <td class="school">
            <strong>SMA Negeri 1 Bojongmangu - IPA</strong>
          </td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">Anggota OSIS Periode 2016/2017</td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">Ketua OSIS Periode 2017/2018</td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">Anggota Ekstrakurikuler Pramuka</td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">Anggota Ekstrakurikuler Wirausaha</td>
        </tr>
        <tr>
          <th class="year">2019 - Now</th>
          <td class="school">
            <strong
              >Universitas Pelita Bangsa - Teknik Informatika</strong
            >
          </td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">
            Anggota Keluarga Besar Mahasiswa Bojongmangu (KBMB)
          </td>
        </tr>
        <tr>
          <th class="gap">|</th>
          <td class="org">Anggota UPB Bojongmangu (UPBB)</td>
        </tr>
      </table>
      <h1>Non Formal</h1>
      <p class="school">Online Course Refactory</p>
      <p class="school">Online Course Dicoding Academy</p>
      <p class="school">Baparekraf Developer Day 2020</p>
      <p class="school">IDCamp Indosat Ooredoo 2020</p>
    </div>
  </div>
  `;
};

export default Education;
