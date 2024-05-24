namespace QrProject.Domain.Dtos
{
    public class UserDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid? OrgId { get; set; }
    }

    public class AddUserDto
    {
        public string Name { get; set; }
        public Guid? OrgId { get; set; }
    }
}
