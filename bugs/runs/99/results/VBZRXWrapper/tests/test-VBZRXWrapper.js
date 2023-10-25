const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractEyQZ4ta = await VBZRXWrapper.new({from: accounts[2]});
		const valueBczVjA6 = BigInt("82")
		const spendergY3NfCV = accounts[4]
		const valuekuJFqeo = BigInt("927")
		const dst5ksa5q = accounts[2]
		const srcPsFC0qX = "0x0000000000000000000000000000000000000001"
		const nullSHQDZSb = await contractEyQZ4ta.claim.call({from: accounts[1]});
		await contractEyQZ4ta.exit.call({from: accounts[1]});
		const nullspvro0B = await contractEyQZ4ta.claim.call({from: accounts[4]});
		const nullLcMtpel = await contractEyQZ4ta.approve.call(spendergY3NfCV, valueBczVjA6, {from: accounts[4]});
		const nullhQcxvE9 = await contractEyQZ4ta.transferFrom.call(srcPsFC0qX, dst5ksa5q, valuekuJFqeo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullSHQDZSb, 0)
		await expect(contractEyQZ4ta.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractEtvqKL3 = await VBZRXWrapper.new({from: accounts[2]});
		const valueS3x0laU = BigInt("1003")
		const accountROsfEyu = accounts[0]
		const value2rUkTw = BigInt("302")
		const spenderzfcNruy = accounts[3]
		await contractEtvqKL3.deposit.call(valueS3x0laU, {from: accounts[4]});
		const nullZYZcQUQ = await contractEtvqKL3.claimable.call(accountROsfEyu, {from: accounts[2]});
		const nullgKoP4mG = await contractEtvqKL3.approve.call(spenderzfcNruy, value2rUkTw, {from: "0x0000000000000000000000000000000000000001"});
		await contractEtvqKL3.exit.call({from: accounts[3]});
		const nullLLeeoef = await contractEtvqKL3.claim.call({from: accounts[2]});

		await expect(contractEtvqKL3.deposit.call(valueS3x0laU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractguaKRqx = await VBZRXWrapper.new({from: accounts[0]});
		const accountSPGWGQ7 = accounts[1]
		const accountZMv7AVo = accounts[3]
		const nullMzeSuPd = await contractguaKRqx.claim.call({from: accounts[4]});
		const nullENgRYOE = await contractguaKRqx.claimable.call(accountSPGWGQ7, {from: accounts[0]});
		const nullmVQpzb = await contractguaKRqx.claimable.call(accountZMv7AVo, {from: accounts[5]});

		assert.equal(nullMzeSuPd, 0)
		await expect(contractguaKRqx.claimable.call(accountSPGWGQ7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractIC2dnC4 = await VBZRXWrapper.new({from: accounts[0]});
		const valueImWlR6p = BigInt("463")
		const dstlUD1nLm = "0x0000000000000000000000000000000000000001"
		const srcc3r6BfB = accounts[2]
		const nullsc4fgDe = await contractIC2dnC4.claim.call({from: accounts[3]});
		const nullQTbQzoV = await contractIC2dnC4.transferFrom.call(srcc3r6BfB, dstlUD1nLm, valueImWlR6p, {from: accounts[4]});

		assert.equal(nullsc4fgDe, 0)
		await expect(contractIC2dnC4.transferFrom.call(srcc3r6BfB, dstlUD1nLm, valueImWlR6p, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractjnDCxXp = await VBZRXWrapper.new({from: accounts[5]});
		const valueMtR1aK0 = BigInt("2011")
		const spenderNTIGtGc = accounts[0]
		const valueB9Y6Imn = BigInt("51")
		const spenderstVs1Pd = accounts[0]
		const nullsCJO8dd = await contractjnDCxXp.approve.call(spenderNTIGtGc, valueMtR1aK0, {from: accounts[1]});
		const nullPySJijX = await contractjnDCxXp.claim.call({from: accounts[4]});
		const nullQNhdYNa = await contractjnDCxXp.approve.call(spenderstVs1Pd, valueB9Y6Imn, {from: accounts[1]});

		assert.equal(nullPySJijX, 0)
		assert.equal(nullQNhdYNa, true)
		assert.equal(nullsCJO8dd, true)
	});

	it('test for VBZRXWrapper', async () => {
		const contracthFiAjUg = await VBZRXWrapper.new({from: accounts[0]});
		const valuehwAO06 = BigInt("34")
		const dstC2JHv6Y = accounts[0]
		const valueovqkKkP = BigInt("922")
		const spenderl3wkI3 = accounts[4]
		const valueRdXwQT6 = BigInt("463")
		const dstQtGeDRS = "0x0000000000000000000000000000000000000001"
		const srcGKOZXPW = accounts[2]
		const nullkNJnn94 = await contracthFiAjUg.transfer.call(dstC2JHv6Y, valuehwAO06, {from: accounts[3]});
		await contracthFiAjUg.exit.call({from: accounts[1]});
		const nullO1AdV1 = await contracthFiAjUg.claim.call({from: accounts[3]});
		const nullQUJ1At3 = await contracthFiAjUg.approve.call(spenderl3wkI3, valueovqkKkP, {from: accounts[5]});
		const nullpCrp8e0 = await contracthFiAjUg.transferFrom.call(srcGKOZXPW, dstQtGeDRS, valueRdXwQT6, {from: accounts[4]});

		await expect(contracthFiAjUg.transfer.call(dstC2JHv6Y, valuehwAO06, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractXqAZNJS = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueI4YGElK = BigInt("1523")
		const spenderQqXofV3 = accounts[2]
		const valuetQu4Vr = BigInt("1310")
		const dstC8rpIhF = accounts[5]
		const srcbjE1ZVj = accounts[3]
		const valueUA1K2q5 = BigInt("1575")
		const nullfJzA92z = await contractXqAZNJS.approve.call(spenderQqXofV3, valueI4YGElK, {from: accounts[5]});
		const nullLM0MzbS = await contractXqAZNJS.transferFrom.call(srcbjE1ZVj, dstC8rpIhF, valuetQu4Vr, {from: "0x0000000000000000000000000000000000000001"});
		await contractXqAZNJS.withdraw.call(valueUA1K2q5, {from: accounts[3]});
	});
})