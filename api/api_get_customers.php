<?php

/*
 * Api to retrieve customers list from MySQL DB
 * 
 * Espace ACE
 * 
 * Cedric F.
 */

class ExportData {


    // MySQL Credentials
    private $host = '127.0.0.1';
    private $login = 'root';
    private $pwd = '';
    private $db = 'ace';
    private $dblink;
    private $data;

    /*
     * Launches a connection when created.
     * 
     */

    private function __construct() {
        $this->do_connect();
    }

    /*
     * Connects to the DB if the link isn't set.
     */

     private function do_connect() {
        $formatted_string = sprintf('mysql:host=%s;dbname=%s;charset=utf8mb4', $this->host, $this->db);
        $this->dblink = new PDO($formatted_string, $this->login, $this->pwd);
     }

    /*
     * Casually retrieve customers from 
     * DB.
     */

    private function get_customers_list() {
        $tmp = $this->dblink->query('SELECT * FROM customers');
        $this->data = json_encode($tmp->fetchAll(PDO::FETCH_ASSOC));
    }

    /*
     * Public function to safely get data from the class.
     *  only retrieve $this->data
     */

    public function getCustomers() {
        if (empty($this->data)) { 
            $this->get_customers_list(); 
            return $this->data;
        }
        else { return $this->data; }
    }

    /*
     * Unset the link
     */
    private function __destruct() {
        $this->dblink->close();
        unset($this->dblink);
    }
}

$export_data = new ExportData();
echo $export_data->getCustomers();