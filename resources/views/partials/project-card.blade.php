<a href="{{ get_permalink($project->ID) }}">
    {!! get_the_post_thumbnail($project->ID, '16by9', ['class' => ""]) !!}
    <h3>{{ $project->post_title}}</h3>
</a>