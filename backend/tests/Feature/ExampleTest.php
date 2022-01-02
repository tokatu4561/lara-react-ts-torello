<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * @test
     */
    public function 一覧を取得()
    {
        $response = $this->getJson('api/task_cards');
        dd($response->json());

        $response->assertStatus(200);
    }
}
