const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractyOu2WCo = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueIW2metT = BigInt("1530")
		const valuew4xzVqC = BigInt("1835")
		const spenderRVL9N5V = accounts[3]
		const valuebBjJI23 = BigInt("1408")
		const dstHhBaUNq = accounts[2]
		const valueMuQQMNP = BigInt("1326")
		const dstf8JEHIR = accounts[3]
		const nullThkNGTt = await contractyOu2WCo.claim.call({from: accounts[0]});
		await contractyOu2WCo.withdraw.call(valueIW2metT, {from: accounts[0]});
		const nullXXAzG1t = await contractyOu2WCo.approve.call(spenderRVL9N5V, valuew4xzVqC, {from: accounts[5]});
		const nullaChoO9t = await contractyOu2WCo.transfer.call(dstHhBaUNq, valuebBjJI23, {from: accounts[3]});
		const nullqihKG9t = await contractyOu2WCo.transfer.call(dstf8JEHIR, valueMuQQMNP, {from: accounts[4]});
		await contractyOu2WCo.exit.call({from: accounts[4]});

		assert.equal(nullThkNGTt, 0)
		await expect(contractyOu2WCo.withdraw.call(valueIW2metT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractWsnpTKO = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuegybZfMZ = BigInt("1104")
		const spenderFZ9b235 = accounts[0]
		const valueIVCMcuo = BigInt("476")
		const spenderbkwbVB7 = accounts[4]
		const valueRIgvcJd = BigInt("1130")
		const spenderV6IVTf8 = accounts[1]
		const valueuaJnDyc = BigInt("830")
		const dstojDjQte = accounts[5]
		const src0WAYz9 = accounts[0]
		const nullXQF4ZNT = await contractWsnpTKO.approve.call(spenderFZ9b235, valuegybZfMZ, {from: accounts[1]});
		const nullN4Uwvn9 = await contractWsnpTKO.approve.call(spenderbkwbVB7, valueIVCMcuo, {from: accounts[2]});
		const nullISsLBqU = await contractWsnpTKO.approve.call(spenderV6IVTf8, valueRIgvcJd, {from: accounts[0]});
		const nullyIKTLX1 = await contractWsnpTKO.transferFrom.call(src0WAYz9, dstojDjQte, valueuaJnDyc, {from: accounts[4]});

		assert.equal(nullISsLBqU, true)
		assert.equal(nullN4Uwvn9, true)
		assert.equal(nullXQF4ZNT, true)
		await expect(contractWsnpTKO.transferFrom.call(src0WAYz9, dstojDjQte, valueuaJnDyc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractrZHnIRZ = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountYzrOVor = accounts[0]
		const valuedDjDqW = BigInt("746")
		const valuelXmk6Lr = BigInt("2016")
		const nullkIDS1Gf = await contractrZHnIRZ.claimable.call(accountYzrOVor, {from: accounts[5]});
		await contractrZHnIRZ.exit.call({from: accounts[2]});
		await contractrZHnIRZ.deposit.call(valuedDjDqW, {from: accounts[4]});
		await contractrZHnIRZ.withdraw.call(valuelXmk6Lr, {from: accounts[5]});
		const nulloFknNu = await contractrZHnIRZ.claim.call({from: accounts[2]});

		assert.equal(nullkIDS1Gf, 0)
		await expect(contractrZHnIRZ.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracthxTXb3G = await VBZRXWrapper_alt.new({from: accounts[2]});
		const toggleeNgldzE = true
		const addrP58tzVI = accounts[2]
		await contracthxTXb3G.setBridge.call(addrP58tzVI, toggleeNgldzE, {from: accounts[0]});
		const null9eX54d = await contracthxTXb3G.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nullqr279ns = await contracthxTXb3G.claim.call({from: accounts[2]});

		await expect(contracthxTXb3G.setBridge.call(addrP58tzVI, toggleeNgldzE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractVfo5v0b = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valuevaacrr = BigInt("1053")
		const dstmtUtPK6 = accounts[1]
		const valueOQGYPV0 = BigInt("569")
		const dstEeMcF7y = accounts[4]
		const nullzbMFsvT = await contractVfo5v0b.transfer.call(dstmtUtPK6, valuevaacrr, {from: accounts[3]});
		const nullJuJCAC8 = await contractVfo5v0b.transfer.call(dstEeMcF7y, valueOQGYPV0, {from: accounts[5]});
		await contractVfo5v0b.exit.call({from: accounts[5]});
		await contractVfo5v0b.exit.call({from: accounts[4]});
		await contractVfo5v0b.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractVfo5v0b.transfer.call(dstmtUtPK6, valuevaacrr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracti7Wl02s = await VBZRXWrapper_alt.new({from: accounts[2]});
		const value6pfuCx = BigInt("1103")
		const account3kvaqn = accounts[1]
		const valueY1Ye1yz = BigInt("183")
		const accountYaWbUlY = accounts[4]
		const accountGJbXUsP = "0x0000000000000000000000000000000000000001"
		await contracti7Wl02s.deposit.call(value6pfuCx, {from: accounts[3]});
		const nullegLcfgx = await contracti7Wl02s.claimable.call(account3kvaqn, {from: accounts[4]});
		await contracti7Wl02s.withdraw.call(valueY1Ye1yz, {from: accounts[3]});
		const nullkyUsPoT = await contracti7Wl02s.claimable.call(accountYaWbUlY, {from: accounts[3]});
		const null9HeOQw = await contracti7Wl02s.claimable.call(accountGJbXUsP, {from: accounts[3]});
		await contracti7Wl02s.exit.call({from: accounts[4]});

		await expect(contracti7Wl02s.deposit.call(value6pfuCx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractnwP8wWb = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountDvnTT2r = accounts[0]
		const toggleYuasXnQ = false
		const addrvzj7wWN = accounts[2]
		const valueST4t4g = BigInt("1370")
		const spenderk1ni8u = accounts[4]
		const valueqccqsL6 = BigInt("746")
		const valueYDbQdVY = BigInt("383")
		const valuencz1Ze = BigInt("1451")
		const valuePFJ5Xzl = BigInt("280")
		const valueUFSsWGk = BigInt("1248")
		const dsttQFSY43 = accounts[1]
		const srct5hLgEP = accounts[2]
		const null83LVum = await contractnwP8wWb.claimable.call(accountDvnTT2r, {from: accounts[5]});
		await contractnwP8wWb.setBridge.call(addrvzj7wWN, toggleYuasXnQ, {from: accounts[4]});
		await contractnwP8wWb.exit.call({from: accounts[2]});
		const nullZtqOtT5 = await contractnwP8wWb.approve.call(spenderk1ni8u, valueST4t4g, {from: accounts[1]});
		await contractnwP8wWb.deposit.call(valueqccqsL6, {from: accounts[4]});
		await contractnwP8wWb.deposit.call(valueYDbQdVY, {from: accounts[3]});
		await contractnwP8wWb.withdraw.call(valuencz1Ze, {from: accounts[5]});
		await contractnwP8wWb.withdraw.call(valuePFJ5Xzl, {from: accounts[1]});
		const nulll64EtOW = await contractnwP8wWb.transferFrom.call(srct5hLgEP, dsttQFSY43, valueUFSsWGk, {from: accounts[5]});

		assert.equal(null83LVum, 0)
		await expect(contractnwP8wWb.setBridge.call(addrvzj7wWN, toggleYuasXnQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contracto7UH2GC = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueR2uSlwy = BigInt("982")
		const accountYpBzNYK = accounts[0]
		const valueXPUos68 = BigInt("469")
		const valueBOy44LD = BigInt("895")
		await contracto7UH2GC.deposit.call(valueR2uSlwy, {from: accounts[0]});
		const nullVF2HssH = await contracto7UH2GC.claimable.call(accountYpBzNYK, {from: accounts[1]});
		await contracto7UH2GC.deposit.call(valueXPUos68, {from: accounts[0]});
		const nullTcadAGb = await contracto7UH2GC.claim.call({from: accounts[1]});
		await contracto7UH2GC.withdraw.call(valueBOy44LD, {from: accounts[4]});
	});
})