<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //書きを記載する
        \DB::table('tasks')->insert([
            [
                'text' => '食べる',
                'taskCardId' => 1,
                'draggableId' => 'item0',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'text' => '寝る',
                'taskCardId' => 2,
                'draggableId' => 'item1',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);
    }
}
