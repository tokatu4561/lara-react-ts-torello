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

    /* 表示しているタスクカードを更新する
    * 
    */
    public function create(Request $request)
    {
        TaskCard::query()->delete();

        $newTaskCards = array();
        foreach ($request->taskCards as $taskCard) {
            $newTaskCard = new TaskCard;
            $newTaskCard->draggableId = $taskCard['draggableId'];
            $newTaskCard->title = $taskCard['title'];
            $newTaskCard->save();
            array_push($newTaskCards, $newTaskCard);
        }

        return response()->json($newTaskCards, 200);
    }
}
