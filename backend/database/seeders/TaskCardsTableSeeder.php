<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TaskCardsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //書きを記載する
        \DB::table('taskCards')->insert([
            [
                'title' => '今日やること',
                'draggableId' => 'taskcard0',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'name' => '明日やること',
                'draggableId' => 'taskcard1',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);
    }
}
