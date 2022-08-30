import React,{useEffect,useState} from 'react';
import {Route,Link} from 'react-router-dom';
import 'react-notifications-component/dist/theme.css';
import ReactNotification,{store} from 'react-notifications-component';


import { MDBDataTableV5 } from 'mdbreact';

 function TopSearchSelect() {
  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: 'Name',
        field: 'name',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        },
      },
      {
        label: 'Position',
        field: 'position',
        width: 270,
      },
      {
        label: 'Office',
        field: 'office',
        width: 200,
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'disabled',
        width: 150,
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'disabled',
        width: 100,
      },
    ],
    rows: [
      {
        name:   <h1 className="h2">Dashboard</h1>,
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320',
      },
      {
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170',
      },
      {
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86',
      },
      {
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433',
      },
      {
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        salary: '$162',
      },
      {
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: '61',
        date: '2012/12/02',
        salary: '$372',
      },
      {
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: '59',
        date: '2012/08/06',
        salary: '$137',
      },
      {
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        salary: '$327',
      },
      {
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: '39',
        date: '2009/09/15',
        salary: '$205',
      },
      {
        name: 'Sonya Frost',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: '23',
        date: '2008/12/13',
        salary: '$103',
      },
      {
        name: 'Jena Gaines',
        position: 'Office Manager',
        office: 'London',
        age: '30',
        date: '2008/12/19',
        salary: '$90',
      },
      {
        name: 'Quinn Flynn',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: '22',
        date: '2013/03/03',
        salary: '$342',
      },
      {
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        age: '36',
        date: '2008/10/16',
        salary: '$470',
      },
      {
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: '43',
        date: '2012/12/18',
        salary: '$313',
      },
      {
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',
        office: 'London',
        age: '19',
        date: '2010/03/17',
        salary: '$385',
      },
      {
        name: 'Michael Silva',
        position: 'Marketing Designer',
        office: 'London',
        age: '66',
        date: '2012/11/27',
        salary: '$198',
      },
      {
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: '64',
        date: '2010/06/09',
        salary: '$725',
      },
      {
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: '59',
        date: '2009/04/10',
        salary: '$237',
      },
  
    ],
  });

  const testa=()=>{
    console.log("grtrytrytrytr");
  }

  return (
    <MDBDataTableV5
      hover
      entriesOptions={[5, 20, 25]}
      entries={5}
      pagesAmount={4}
      data={datatable}
      pagingTop
      searchTop
      searchBottom={false}
      onClick={testa}
    />
  );
}




const Home=()=>{

  useEffect(() => {

  
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
          data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false,
        }
      }
    });

    return () => {
ctx.innerHTML='';
    }

  }, []);



   
return(

      
        
        <main role="main" className="pt-3 home_content col-lg-11">
                 <ReactNotification/>
        {/* <main role="main" className="pt-3 col-md-11 ml-sm-auto col-lg-11 main"> */}
          <div className="flex-wrap pb-2 mb-3 d-flex justify-content-between flex-md-nowrap align-items-center border-bottom">
            <h1 className="h2">Dashboard</h1>
  
            <div className="mb-2 btn-toolbar mb-md-0">
              <div className="mr-2 btn-group">
                <button className="btn btn-sm btn-outline-secondary">Share</button>
                <button className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
              <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                <span data-feather="calendar"></span>
                This week
              </button>
            </div>
          </div>

          <canvas className="my-4" id="myChart" width="900" height="380"></canvas>
   
          <h2>Section title</h2>

          {/*  */}

       <TopSearchSelect/>

        {/*  */}


          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                  <th>Header</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1,001</td>
                  <td>Lorem</td>
                  <td>ipsum</td>
                  <td>dolor</td>
                  <td>sit</td>
                </tr>
                <tr>
                  <td>1,002</td>
                  <td>amet</td>
                  <td>consectetur</td>
                  <td>adipiscing</td>
                  <td>elit</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>Integer</td>
                  <td>nec</td>
                  <td>odio</td>
                  <td>Praesent</td>
                </tr>
                <tr>
                  <td>1,003</td>
                  <td>libero</td>
                  <td>Sed</td>
                  <td>cursus</td>
                  <td>ante</td>
                </tr>
                <tr>
                  <td>1,004</td>
                  <td>dapibus</td>
                  <td>diam</td>
                  <td>Sed</td>
                  <td>nisi</td>
                </tr>
                <tr>
                  <td>1,005</td>
                  <td>Nulla</td>
                  <td>quis</td>
                  <td>sem</td>
                  <td>at</td>
                </tr>
                <tr>
                  <td>1,006</td>
                  <td>nibh</td>
                  <td>elementum</td>
                  <td>imperdiet</td>
                  <td>Duis</td>
                </tr>
                <tr>
                  <td>1,007</td>
                  <td>sagittis</td>
                  <td>ipsum</td>
                  <td>Praesent</td>
                  <td>mauris</td>
                </tr>
                <tr>
                  <td>1,008</td>
                  <td>Fusce</td>
                  <td>nec</td>
                  <td>tellus</td>
                  <td>sed</td>
                </tr>
                <tr>
                  <td>1,009</td>
                  <td>augue</td>
                  <td>semper</td>
                  <td>porta</td>
                  <td>Mauris</td>
                </tr>
                <tr>
                  <td>1,010</td>
                  <td>massa</td>
                  <td>Vestibulum</td>
                  <td>lacinia</td>
                  <td>arcu</td>
                </tr>
                <tr>
                  <td>1,011</td>
                  <td>eget</td>
                  <td>nulla</td>
                  <td>className</td>
                  <td>aptent</td>
                </tr>
                <tr>
                  <td>1,012</td>
                  <td>taciti</td>
                  <td>sociosqu</td>
                  <td>ad</td>
                  <td>litora</td>
                </tr>
                <tr>
                  <td>1,013</td>
                  <td>torquent</td>
                  <td>per</td>
                  <td>conubia</td>
                  <td>nostra</td>
                </tr>
                <tr>
                  <td>1,014</td>
                  <td>per</td>
                  <td>inceptos</td>
                  <td>himenaeos</td>
                  <td>Curabitur</td>
                </tr>
                <tr>
                  <td>1,015</td>
                  <td>sodales</td>
                  <td>ligula</td>
                  <td>in</td>
                  <td>libero</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
   
   




 
);
}
export default React.memo(Home);