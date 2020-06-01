using Hrms.Core.Domains.Entities;
using System;

namespace Arms.Domain.Entities
{
    public class Round: Entity
    {
        public int Id { get; set; }
        public int RoundTypeId { get; set; }
        public int InterviewId { get; set; }
        public DateTime RoundDate { get; set; }
        public TimeSpan RoundTime { get; set; }
        public DateTime CreatedAt { get; set; }
        public string CreatedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public string ModifiedBy { get; set; }
        public Interview Interview { get; set; }
        public RoundType RoundType { get; set; }
    }
}