<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    //
    /* タスクの一覧を表示する
    * 
    */
    public function index()
    {
        $posts = Task::all();
        return response()->json($posts, 200);
    }
}
