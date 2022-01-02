<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Models\Task;
use App\Models\Models\TaskCard;
use Illuminate\Http\Request;

class TaskCardController extends Controller
{
    /* タスクカードの一覧を表示する
    * 
    */
    public function index()
    {
        $taskCards = TaskCard::all();
        return response()->json($taskCards, 200);
    }
}
