const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contracthHSYf0i = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueoF1FIYS = BigInt("892")
		const valueDqWZ1L = BigInt("200")
		const accountbdc0xSL = accounts[0]
		await contracthHSYf0i.withdraw.call(valueoF1FIYS, {from: accounts[0]});
		await contracthHSYf0i.withdraw.call(valueDqWZ1L, {from: accounts[5]});
		const nullCnk5i7v = await contracthHSYf0i.claimable.call(accountbdc0xSL, {from: accounts[0]});

		await expect(contracthHSYf0i.withdraw.call(valueoF1FIYS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractnPenAH = await VBZRXWrapper_alt.new({from: accounts[4]});
		const togglezUs2d8 = true
		const addrS2buoed = accounts[3]
		const accountIZreSvp = accounts[0]
		const valuezJSsom = BigInt("1130")
		const value1sK3Fh = BigInt("1197")
		const dstSqthF0P = accounts[3]
		const srcG7VUbOT = "0x0000000000000000000000000000000000000001"
		await contractnPenAH.setBridge.call(addrS2buoed, togglezUs2d8, {from: accounts[4]});
		const nullkOehcf8 = await contractnPenAH.claimable.call(accountIZreSvp, {from: accounts[0]});
		const nulldaFZU2v = await contractnPenAH.claim.call({from: accounts[2]});
		await contractnPenAH.withdraw.call(valuezJSsom, {from: accounts[0]});
		const nullq8sjJqn = await contractnPenAH.transferFrom.call(srcG7VUbOT, dstSqthF0P, value1sK3Fh, {from: accounts[3]});

		assert.equal(nulldaFZU2v, 0)
		assert.equal(nullkOehcf8, 0)
		await expect(contractnPenAH.claim.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractPvAMvsB = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valuep1LnXkx = BigInt("1336")
		const dstn96oaYd = accounts[2]
		const srcFibtrID = accounts[4]
		const valueDFYrau = BigInt("1535")
		const spenderzOb69cK = accounts[3]
		const valueiAUq3w = BigInt("716")
		const dstMILGOgB = "0x0000000000000000000000000000000000000001"
		const togglebAIboNf = true
		const addrVm2XTI0 = accounts[4]
		const nullrHGB9oi = await contractPvAMvsB.transferFrom.call(srcFibtrID, dstn96oaYd, valuep1LnXkx, {from: accounts[1]});
		const nullwfE6pUD = await contractPvAMvsB.approve.call(spenderzOb69cK, valueDFYrau, {from: accounts[4]});
		const nullzUQFHrQ = await contractPvAMvsB.transfer.call(dstMILGOgB, valueiAUq3w, {from: accounts[0]});
		await contractPvAMvsB.setBridge.call(addrVm2XTI0, togglebAIboNf, {from: accounts[2]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractEfqjVdI = await VBZRXWrapper_alt.new({from: accounts[5]});
		const valueJ12TLE1 = BigInt("876")
		const nullewFW01n = await contractEfqjVdI.claim.call({from: accounts[1]});
		await contractEfqjVdI.exit.call({from: accounts[3]});
		await contractEfqjVdI.deposit.call(valueJ12TLE1, {from: accounts[0]});

		assert.equal(nullewFW01n, 0)
		await expect(contractEfqjVdI.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contract7KcLt8 = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueKYiJMSV = BigInt("879")
		const dstgBIUOmV = accounts[4]
		const srcWMaAb2N = "0x0000000000000000000000000000000000000001"
		const valueZWcQsvg = BigInt("460")
		const spenderG6IjacW = accounts[4]
		const valuefOeI01H = BigInt("1144")
		const valueZWvuv3Q = BigInt("1262")
		const nullIrSVipw = await contract7KcLt8.transferFrom.call(srcWMaAb2N, dstgBIUOmV, valueKYiJMSV, {from: accounts[4]});
		await contract7KcLt8.exit.call({from: accounts[5]});
		const nullVL2jjhR = await contract7KcLt8.approve.call(spenderG6IjacW, valueZWcQsvg, {from: accounts[2]});
		await contract7KcLt8.withdraw.call(valuefOeI01H, {from: accounts[3]});
		await contract7KcLt8.deposit.call(valueZWvuv3Q, {from: accounts[5]});

		await expect(contract7KcLt8.transferFrom.call(srcWMaAb2N, dstgBIUOmV, valueKYiJMSV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractQdQeCht = await VBZRXWrapper_alt.new({from: accounts[0]});
		const account8TzCGn = accounts[4]
		const valuexMlcUAK = BigInt("1198")
		const spenderB3WDID = accounts[1]
		const valueaBsqRIg = BigInt("945")
		const spenderYnzcu15 = accounts[0]
		const nulltP1W9P = await contractQdQeCht.claimable.call(account8TzCGn, {from: accounts[1]});
		const nullcRzK5G = await contractQdQeCht.approve.call(spenderB3WDID, valuexMlcUAK, {from: accounts[0]});
		await contractQdQeCht.exit.call({from: accounts[1]});
		const nullLzA4Mjv = await contractQdQeCht.approve.call(spenderYnzcu15, valueaBsqRIg, {from: accounts[1]});

		assert.equal(nullcRzK5G, true)
		assert.equal(nulltP1W9P, 0)
		await expect(contractQdQeCht.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractS7lWzNp = await VBZRXWrapper_alt.new({from: accounts[0]});
		const accountTJeoLK = accounts[4]
		const valueIo5h557 = BigInt("1808")
		const valueqSSuYsR = BigInt("1167")
		const spenderUPSJGl2 = accounts[1]
		const valueBjBDh2f = BigInt("945")
		const spenderwVTXYWB = accounts[0]
		const nullTSXQB13 = await contractS7lWzNp.claimable.call(accountTJeoLK, {from: accounts[1]});
		const nullX67Zmzs = await contractS7lWzNp.claim.call({from: accounts[4]});
		await contractS7lWzNp.deposit.call(valueIo5h557, {from: accounts[2]});
		const nullktUWKmZ = await contractS7lWzNp.approve.call(spenderUPSJGl2, valueqSSuYsR, {from: accounts[0]});
		await contractS7lWzNp.exit.call({from: accounts[1]});
		const nullpD2XW92 = await contractS7lWzNp.approve.call(spenderwVTXYWB, valueBjBDh2f, {from: accounts[1]});

		assert.equal(nullTSXQB13, 0)
		assert.equal(nullX67Zmzs, 0)
		await expect(contractS7lWzNp.deposit.call(valueIo5h557, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractXisnyDc = await VBZRXWrapper_alt.new({from: accounts[4]});
		const toggleo7mqjzd = true
		const addrOL5Qnn = accounts[4]
		const valuekikvulQ = BigInt("1158")
		const spenderupb1TB5 = "0x0000000000000000000000000000000000000001"
		const accountU2DN4wq = accounts[2]
		await contractXisnyDc.setBridge.call(addrOL5Qnn, toggleo7mqjzd, {from: accounts[2]});
		const nullhib1I42 = await contractXisnyDc.approve.call(spenderupb1TB5, valuekikvulQ, {from: accounts[3]});
		const nullEJeDJLs = await contractXisnyDc.claimable.call(accountU2DN4wq, {from: accounts[0]});

		await expect(contractXisnyDc.setBridge.call(addrOL5Qnn, toggleo7mqjzd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractf0dlsxz = await VBZRXWrapper_alt.new({from: accounts[3]});
		const accountFANpUwh = accounts[1]
		const accountGdJavrt = accounts[1]
		const valueFqROKH8 = BigInt("39")
		const dstBczc2xV = accounts[4]
		const nullxsBS4tX = await contractf0dlsxz.claimable.call(accountFANpUwh, {from: accounts[0]});
		const nullea2HCCc = await contractf0dlsxz.claimable.call(accountGdJavrt, {from: accounts[1]});
		const nullEswNYPV = await contractf0dlsxz.transfer.call(dstBczc2xV, valueFqROKH8, {from: accounts[4]});
		const nullVlPIJfn = await contractf0dlsxz.claim.call({from: accounts[4]});

		assert.equal(nullea2HCCc, 0)
		assert.equal(nullxsBS4tX, 0)
		await expect(contractf0dlsxz.transfer.call(dstBczc2xV, valueFqROKH8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractup1UiGa = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountWZR8uCc = accounts[1]
		const valueKzgkMmk = BigInt("0")
		const dstWVW6OwS = accounts[2]
		const srcDjPFR3b = accounts[3]
		const nullXVAtOfN = await contractup1UiGa.claimable.call(accountWZR8uCc, {from: accounts[0]});
		const nullTc2p1Vv = await contractup1UiGa.transferFrom.call(srcDjPFR3b, dstWVW6OwS, valueKzgkMmk, {from: accounts[2]});
		await contractup1UiGa.exit.call({from: accounts[1]});

		assert.equal(nullXVAtOfN, 0)
		await expect(contractup1UiGa.transferFrom.call(srcDjPFR3b, dstWVW6OwS, valueKzgkMmk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})