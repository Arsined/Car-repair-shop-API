import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fault } from './fault.entity';
import { CreateFaultDto } from './dto/create-fault.dto';
import { IncompleteFaultDto } from './dto/incomplete-fault.dto';

@Injectable()
export class FaultService {
  constructor(
    @InjectRepository(Fault)
    private faultRepository: Repository<Fault>,
  ) {}

  async create(createFaultDto: CreateFaultDto): Promise<Fault> {
    const fault = this.faultRepository.create();
    fault.name = createFaultDto.name;
    fault.description = createFaultDto.description;
    fault.price = createFaultDto.price;
    await this.faultRepository.save(fault);
    return fault;
  }

  async findAll(): Promise<Fault[]> {
    const faults = await this.faultRepository.find();
    return faults;
  }

  async findOne(id: number): Promise<Fault> {
    const fault = await this.faultRepository.findOne({
      where: { id },
    });
    return fault;
  }

  async findIncomplete(): Promise<IncompleteFaultDto[]> {
    const faults = await this.faultRepository.find();
    const incompleteFaults: IncompleteFaultDto[] = faults.map((fault) => {
      const incompleteFault = new IncompleteFaultDto();
      incompleteFault.name = fault.name;
      incompleteFault.price = fault.price;
      return incompleteFault;
    });
    return incompleteFaults;
  }

  async update(id: number, updateFault: Fault): Promise<Fault> {
    const fault = await this.faultRepository.findOne({
      where: { id },
    });
    fault.name = updateFault.name;
    fault.description = updateFault.description;
    fault.price = updateFault.price;
    await this.faultRepository.save(fault);
    return fault;
  }

  async delete(id: number): Promise<void> {
    await this.faultRepository.delete(id);
  }
}
