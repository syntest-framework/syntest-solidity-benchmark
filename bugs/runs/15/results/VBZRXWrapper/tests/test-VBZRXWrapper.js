const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractIOTIHrC = await VBZRXWrapper.new({from: accounts[3]});
		const valueDKEqNY = BigInt("270")
		const spenderK1Dqlx2 = accounts[1]
		const accountz6RbWIS = accounts[3]
		const valuel0hQkFp = BigInt("1216")
		const spenderMKfMa7H = "0x0000000000000000000000000000000000000001"
		const valueldgLnDe = BigInt("1446")
		const nullQIixxq = await contractIOTIHrC.approve.call(spenderK1Dqlx2, valueDKEqNY, {from: accounts[4]});
		const nullj2gcnNG = await contractIOTIHrC.claimable.call(accountz6RbWIS, {from: accounts[4]});
		const nullsG17EY = await contractIOTIHrC.approve.call(spenderMKfMa7H, valuel0hQkFp, {from: accounts[4]});
		await contractIOTIHrC.deposit.call(valueldgLnDe, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullQIixxq, true)
		await expect(contractIOTIHrC.claimable.call(accountz6RbWIS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contract4PwkgQ = await VBZRXWrapper.new({from: accounts[2]});
		const accountgm92RVH = "0x0000000000000000000000000000000000000001"
		const accountJst3kOD = "0x0000000000000000000000000000000000000001"
		const valueEUhDzv5 = BigInt("275")
		await contract4PwkgQ.exit.call({from: accounts[0]});
		const nullm1nxpWb = await contract4PwkgQ.claimable.call(accountgm92RVH, {from: accounts[3]});
		const nullxGPOUMq = await contract4PwkgQ.claimable.call(accountJst3kOD, {from: accounts[2]});
		await contract4PwkgQ.withdraw.call(valueEUhDzv5, {from: accounts[1]});

		await expect(contract4PwkgQ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractT1vUh63 = await VBZRXWrapper.new({from: accounts[0]});
		const valuegRxPwY = BigInt("657")
		const dstacPlaPe = accounts[2]
		const srcAQDmXg = "0x0000000000000000000000000000000000000001"
		const nullNEwMtI = await contractT1vUh63.claim.call({from: accounts[4]});
		await contractT1vUh63.exit.call({from: accounts[4]});
		await contractT1vUh63.exit.call({from: accounts[5]});
		await contractT1vUh63.exit.call({from: accounts[0]});
		const nullKSIpoh1 = await contractT1vUh63.transferFrom.call(srcAQDmXg, dstacPlaPe, valuegRxPwY, {from: accounts[3]});
		const nullcOi4yXn = await contractT1vUh63.claim.call({from: accounts[4]});

		assert.equal(nullNEwMtI, 0)
		await expect(contractT1vUh63.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractg1tEAV9 = await VBZRXWrapper.new({from: accounts[0]});
		const valueDflNl3J = BigInt("199")
		const dstMiQJx1Y = accounts[3]
		const nullMesYQF = await contractg1tEAV9.claim.call({from: accounts[1]});
		const nullHqPl8ED = await contractg1tEAV9.claim.call({from: accounts[1]});
		const nullwoYGZvl = await contractg1tEAV9.transfer.call(dstMiQJx1Y, valueDflNl3J, {from: accounts[3]});

		assert.equal(nullHqPl8ED, 0)
		assert.equal(nullMesYQF, 0)
		await expect(contractg1tEAV9.transfer.call(dstMiQJx1Y, valueDflNl3J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractf4QcXZi = await VBZRXWrapper.new({from: accounts[0]});
		const valueR3SHIB = BigInt("237")
		const accounthhZZ3Ok = accounts[1]
		const nullCoChalz = await contractf4QcXZi.claim.call({from: "0x0000000000000000000000000000000000000001"});
		await contractf4QcXZi.deposit.call(valueR3SHIB, {from: accounts[3]});
		await contractf4QcXZi.exit.call({from: accounts[4]});
		const nullITuA67m = await contractf4QcXZi.claimable.call(accounthhZZ3Ok, {from: accounts[1]});
		await contractf4QcXZi.exit.call({from: accounts[0]});
		await contractf4QcXZi.exit.call({from: accounts[2]});

		assert.equal(nullCoChalz, 0)
		await expect(contractf4QcXZi.deposit.call(valueR3SHIB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractka0I14l = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const accountzKdPTOO = accounts[2]
		const valueBTYrrKx = BigInt("1031")
		const valuejyKI2aa = BigInt("530")
		const spenderZBUqsuC = accounts[5]
		const nullUPZmZpj = await contractka0I14l.claimable.call(accountzKdPTOO, {from: accounts[3]});
		const nullpiDUgXp = await contractka0I14l.claim.call({from: accounts[2]});
		await contractka0I14l.deposit.call(valueBTYrrKx, {from: accounts[2]});
		const nulllvdKuV = await contractka0I14l.claim.call({from: accounts[3]});
		const nullaLvI32x = await contractka0I14l.approve.call(spenderZBUqsuC, valuejyKI2aa, {from: accounts[2]});
	});
})