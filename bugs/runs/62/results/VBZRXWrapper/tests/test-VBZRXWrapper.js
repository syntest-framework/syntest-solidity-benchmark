const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contractzkoTAvc = await VBZRXWrapper.new({from: accounts[3]});
		const valueXY6Q8ab = BigInt("1789")
		const dstWuzG34n = accounts[0]
		const srcgLFCsw = accounts[1]
		const nullWqBiil9 = await contractzkoTAvc.transferFrom.call(srcgLFCsw, dstWuzG34n, valueXY6Q8ab, {from: accounts[0]});
		const nullbb5cI6h = await contractzkoTAvc.claim.call({from: accounts[3]});

		await expect(contractzkoTAvc.transferFrom.call(srcgLFCsw, dstWuzG34n, valueXY6Q8ab, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractLhha8UK = await VBZRXWrapper.new({from: accounts[3]});
		const valueafVu8A6 = BigInt("1586")
		const valuefBkDuRQ = BigInt("464")
		const dstc0GDej = "0x0000000000000000000000000000000000000001"
		const srcmOJXBt5 = accounts[2]
		const valuedLBJv7H = BigInt("820")
		const dstyqIU1I5 = "0x0000000000000000000000000000000000000001"
		const srcbm6kbgF = accounts[2]
		const valueJWmDRqB = BigInt("1135")
		const dstwXYehbu = accounts[2]
		const valuerQxNx3 = BigInt("1726")
		const spendercO0cXQV = accounts[1]
		await contractLhha8UK.deposit.call(valueafVu8A6, {from: accounts[4]});
		const nullxbcxTEZ = await contractLhha8UK.transferFrom.call(srcmOJXBt5, dstc0GDej, valuefBkDuRQ, {from: accounts[3]});
		const nullldGgdep = await contractLhha8UK.transferFrom.call(srcbm6kbgF, dstyqIU1I5, valuedLBJv7H, {from: "0x0000000000000000000000000000000000000001"});
		const nullgVOyZl = await contractLhha8UK.transfer.call(dstwXYehbu, valueJWmDRqB, {from: accounts[4]});
		const nullWwHm3gN = await contractLhha8UK.approve.call(spendercO0cXQV, valuerQxNx3, {from: accounts[2]});

		await expect(contractLhha8UK.deposit.call(valueafVu8A6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contracthOn151P = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valueEvzMWCA = BigInt("1987")
		const value7fe9tg = BigInt("1018")
		const accountIqfnKa6 = accounts[0]
		const valueimwnhOl = BigInt("1594")
		const dstwUePIRW = accounts[3]
		await contracthOn151P.exit.call({from: accounts[0]});
		await contracthOn151P.deposit.call(valueEvzMWCA, {from: accounts[5]});
		await contracthOn151P.deposit.call(value7fe9tg, {from: accounts[0]});
		const nullMHEYwbN = await contracthOn151P.claimable.call(accountIqfnKa6, {from: accounts[2]});
		const nullxL9Jl00 = await contracthOn151P.transfer.call(dstwUePIRW, valueimwnhOl, {from: accounts[0]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractT84a9yk = await VBZRXWrapper.new({from: accounts[5]});
		const valuey1XEve1 = BigInt("1502")
		const spenderEWO24r2 = accounts[2]
		const accountWXIZ1cZ = accounts[3]
		const valueFTzPvOi = BigInt("1041")
		const dstb5p6bdn = accounts[0]
		const srcSUbhMKD = accounts[0]
		const nullISsUniA = await contractT84a9yk.approve.call(spenderEWO24r2, valuey1XEve1, {from: accounts[3]});
		const nullm62dV09 = await contractT84a9yk.claimable.call(accountWXIZ1cZ, {from: accounts[4]});
		const nullLfq1pVJ = await contractT84a9yk.transferFrom.call(srcSUbhMKD, dstb5p6bdn, valueFTzPvOi, {from: accounts[0]});
		await contractT84a9yk.exit.call({from: accounts[4]});

		assert.equal(nullISsUniA, true)
		await expect(contractT84a9yk.claimable.call(accountWXIZ1cZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractKbP1bJh = await VBZRXWrapper.new({from: accounts[3]});
		const valueEU7df1q = BigInt("716")
		const spenderNMJxW5V = accounts[3]
		const valueTisfvKU = BigInt("1842")
		const dstTWTtuf7 = accounts[0]
		const srcuSi19sL = accounts[1]
		const accountHZoebSo = accounts[3]
		await contractKbP1bJh.exit.call({from: accounts[2]});
		await contractKbP1bJh.exit.call({from: accounts[3]});
		const nullzMj60Ou = await contractKbP1bJh.approve.call(spenderNMJxW5V, valueEU7df1q, {from: accounts[2]});
		const nullQalV6nA = await contractKbP1bJh.transferFrom.call(srcuSi19sL, dstTWTtuf7, valueTisfvKU, {from: accounts[0]});
		const null6D4eEH = await contractKbP1bJh.claimable.call(accountHZoebSo, {from: accounts[0]});

		await expect(contractKbP1bJh.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractxJHK2ko = await VBZRXWrapper.new({from: accounts[0]});
		const valueqQwDId = BigInt("1392")
		const spenderqatrhqp = accounts[1]
		const nully0P8kR = await contractxJHK2ko.approve.call(spenderqatrhqp, valueqQwDId, {from: accounts[3]});
		const nullQ8iYK3Z = await contractxJHK2ko.claim.call({from: accounts[5]});
		await contractxJHK2ko.exit.call({from: accounts[1]});

		assert.equal(nullQ8iYK3Z, 0)
		assert.equal(nully0P8kR, true)
		await expect(contractxJHK2ko.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractlfveP7 = await VBZRXWrapper.new({from: accounts[0]});
		const valueADy0vQS = BigInt("1392")
		const spenderqZfKyXh = accounts[1]
		const valueJItAILP = BigInt("1918")
		const spenderiXNsofP = accounts[0]
		const valuehWeSdU5 = BigInt("1206")
		const dstXqxkg82 = accounts[0]
		const nullm2SXlqm = await contractlfveP7.approve.call(spenderqZfKyXh, valueADy0vQS, {from: accounts[3]});
		const nullEhmA9Ke = await contractlfveP7.approve.call(spenderiXNsofP, valueJItAILP, {from: accounts[3]});
		const nullaJG4Jw7 = await contractlfveP7.claim.call({from: accounts[5]});
		const nulltCaXdEK = await contractlfveP7.transfer.call(dstXqxkg82, valuehWeSdU5, {from: accounts[3]});
		await contractlfveP7.exit.call({from: accounts[1]});

		assert.equal(nullEhmA9Ke, true)
		assert.equal(nullaJG4Jw7, 0)
		assert.equal(nullm2SXlqm, true)
		await expect(contractlfveP7.transfer.call(dstXqxkg82, valuehWeSdU5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})