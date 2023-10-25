const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractltVQrkv = await VBZRXWrapper.new({from: accounts[1]});
		const valueV8vQaBH = BigInt("1947")
		const dstseFDVY = "0x0000000000000000000000000000000000000001"
		const srczYwejLP = accounts[2]
		const valueGstZum2 = BigInt("1214")
		const valuerbA4RUV = BigInt("901")
		const dstGphMktA = accounts[1]
		const nullZJGaLjP = await contractltVQrkv.transferFrom.call(srczYwejLP, dstseFDVY, valueV8vQaBH, {from: accounts[0]});
		await contractltVQrkv.deposit.call(valueGstZum2, {from: accounts[4]});
		await contractltVQrkv.exit.call({from: accounts[3]});
		const nullUpc823X = await contractltVQrkv.transfer.call(dstGphMktA, valuerbA4RUV, {from: accounts[4]});
		const nullPiW6Gue = await contractltVQrkv.claim.call({from: accounts[1]});

		await expect(contractltVQrkv.transferFrom.call(srczYwejLP, dstseFDVY, valueV8vQaBH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractFKW78gJ = await VBZRXWrapper.new({from: accounts[5]});
		const valueOjFmlwk = BigInt("1537")
		await contractFKW78gJ.deposit.call(valueOjFmlwk, {from: accounts[0]});
		await contractFKW78gJ.exit.call({from: accounts[0]});
		await contractFKW78gJ.exit.call({from: accounts[1]});
		const nullm3GmNY = await contractFKW78gJ.claim.call({from: accounts[4]});

		await expect(contractFKW78gJ.deposit.call(valueOjFmlwk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractN9oOci = await VBZRXWrapper.new({from: accounts[4]});
		const valuev51IbF0 = BigInt("1159")
		const valueriTnrkL = BigInt("61")
		const nullfX0F0T = await contractN9oOci.claim.call({from: accounts[4]});
		await contractN9oOci.deposit.call(valuev51IbF0, {from: accounts[4]});
		await contractN9oOci.deposit.call(valueriTnrkL, {from: accounts[0]});

		assert.equal(nullfX0F0T, 0)
		await expect(contractN9oOci.deposit.call(valuev51IbF0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractMCLY0PX = await VBZRXWrapper.new({from: accounts[1]});
		const valueR7kjjQx = BigInt("621")
		const dstlTKJ7G4 = accounts[5]
		const valuehKKcmm4 = BigInt("49")
		const dstjFBkXp7 = accounts[0]
		const valuerKShHy8 = BigInt("1147")
		const valueDEFzSZ8 = BigInt("1006")
		const spenderrr0aPsu = accounts[3]
		const valueUNpB1PC = BigInt("963")
		const valuep43LYch = BigInt("842")
		const dstpuuhikc = accounts[2]
		const nullvBUNviX = await contractMCLY0PX.transfer.call(dstlTKJ7G4, valueR7kjjQx, {from: accounts[3]});
		const nulltw1GK6U = await contractMCLY0PX.transfer.call(dstjFBkXp7, valuehKKcmm4, {from: accounts[4]});
		await contractMCLY0PX.withdraw.call(valuerKShHy8, {from: accounts[2]});
		const nullmB1hsY6 = await contractMCLY0PX.approve.call(spenderrr0aPsu, valueDEFzSZ8, {from: accounts[1]});
		await contractMCLY0PX.deposit.call(valueUNpB1PC, {from: accounts[0]});
		const nullFFX5zM2 = await contractMCLY0PX.transfer.call(dstpuuhikc, valuep43LYch, {from: accounts[2]});

		await expect(contractMCLY0PX.transfer.call(dstlTKJ7G4, valueR7kjjQx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractNPwFcz = await VBZRXWrapper.new({from: accounts[3]});
		const valuevOJQ4Gr = BigInt("2030")
		const spenderC8vo1dR = "0x0000000000000000000000000000000000000001"
		const valueJNbgdq3 = BigInt("209")
		const spenderC0XLZ8W = accounts[4]
		const nulloFguImI = await contractNPwFcz.claim.call({from: accounts[2]});
		await contractNPwFcz.exit.call({from: accounts[2]});
		const nullnRKMemm = await contractNPwFcz.approve.call(spenderC8vo1dR, valuevOJQ4Gr, {from: accounts[1]});
		await contractNPwFcz.exit.call({from: accounts[0]});
		const nullSW1KU9K = await contractNPwFcz.approve.call(spenderC0XLZ8W, valueJNbgdq3, {from: accounts[2]});
		const null7bu5CE = await contractNPwFcz.claim.call({from: accounts[0]});

		assert.equal(nulloFguImI, 0)
		await expect(contractNPwFcz.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractuS4gaqo = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueHpf7IaW = BigInt("531")
		const spenderAfgsEkn = accounts[2]
		const accountuDsx4zt = accounts[4]
		const valuei8Q0xlO = BigInt("1107")
		const valuekNrMbWa = BigInt("1711")
		const spenderoIL4281 = accounts[0]
		const nullaC4V0nF = await contractuS4gaqo.approve.call(spenderAfgsEkn, valueHpf7IaW, {from: accounts[2]});
		const nulllu6iD7 = await contractuS4gaqo.claimable.call(accountuDsx4zt, {from: accounts[1]});
		await contractuS4gaqo.deposit.call(valuei8Q0xlO, {from: accounts[1]});
		const nullrR7UZUz = await contractuS4gaqo.approve.call(spenderoIL4281, valuekNrMbWa, {from: accounts[3]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractACK6f6v = await VBZRXWrapper.new({from: accounts[4]});
		const accountisk5UPj = accounts[2]
		const accountJtKRDgw = accounts[2]
		const valuecXqdWk4 = BigInt("256")
		const nulll86CWJ = await contractACK6f6v.claimable.call(accountisk5UPj, {from: accounts[3]});
		const nullf7VYdzH = await contractACK6f6v.claimable.call(accountJtKRDgw, {from: accounts[0]});
		await contractACK6f6v.deposit.call(valuecXqdWk4, {from: accounts[0]});

		await expect(contractACK6f6v.claimable.call(accountisk5UPj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractPUmOWTr = await VBZRXWrapper.new({from: accounts[4]});
		const valuesGz6sns = BigInt("986")
		const spenderN9Q4ldc = accounts[5]
		const valuejNAy3si = BigInt("1212")
		const nullxoQklsa = await contractPUmOWTr.claim.call({from: accounts[4]});
		const nullQexAejw = await contractPUmOWTr.approve.call(spenderN9Q4ldc, valuesGz6sns, {from: accounts[2]});
		await contractPUmOWTr.deposit.call(valuejNAy3si, {from: accounts[4]});

		assert.equal(nullQexAejw, true)
		assert.equal(nullxoQklsa, 0)
		await expect(contractPUmOWTr.deposit.call(valuejNAy3si, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})