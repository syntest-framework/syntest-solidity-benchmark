const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresswfqU2zl = accounts[3]
		const addressd8lPBgM = accounts[0]
		const QuickTokenAcXzyXz = await QuickToken.new(addresswfqU2zl, addressd8lPBgM, {from: accounts[0]});
		const uintP9PGHhO = BigInt("755")
		const addressKOFFfVG = accounts[2]
		const addressCzuhBO = accounts[4]
		const addressFh1pU2V = accounts[4]
		const address3sNT3m = accounts[1]
		const addressP14Poga = accounts[1]
		const uintzZg7l3 = BigInt("1828")
		const addressEQ2OJwD = accounts[4]
		const addressYWkEvgR = accounts[0]
		const uintBWL0LgS = BigInt("431")
		const addressCdLgRoo = accounts[3]
		const booluMvgKqy = await QuickTokenAcXzyXz.approve.call(addressKOFFfVG, uintP9PGHhO, {from: accounts[1]});
		const uintebDG8kF = await QuickTokenAcXzyXz.allowance.call(addressFh1pU2V, addressCzuhBO, {from: "0x0000000000000000000000000000000000000001"});
		const uintcQZxa9r = await QuickTokenAcXzyXz.allowance.call(addressP14Poga, address3sNT3m, {from: accounts[0]});
		const boolIZCvZ8n = await QuickTokenAcXzyXz.approve.call(addressEQ2OJwD, uintzZg7l3, {from: accounts[1]});
		const addressZHZuJ1 = await QuickTokenAcXzyXz.setMinter.call(addressYWkEvgR, {from: accounts[0]});
		const boolRsd5hjy = await QuickTokenAcXzyXz.approve.call(addressCdLgRoo, uintBWL0LgS, {from: accounts[1]});

		assert.equal(boolIZCvZ8n, true)
		assert.equal(boolRsd5hjy, true)
		assert.equal(booluMvgKqy, true)
		assert.equal(uintcQZxa9r, BigInt("0"))
		assert.equal(uintebDG8kF, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressamRJVS5 = accounts[0]
		const addressifyMsxL = accounts[4]
		const QuickTokenT052Rpu = await QuickToken.new(addressamRJVS5, addressifyMsxL, {from: accounts[5]});
		const addresstGl1BgC = accounts[4]
		const uintmnALVm0 = BigInt("269")
		const addressGxL0xfO = accounts[3]
		const uintOSzQ5Br = await QuickTokenT052Rpu.balanceOf.call(addresstGl1BgC, {from: accounts[4]});
//		const boolyvcgSds = await QuickTokenT052Rpu.transfer.call(addressGxL0xfO, uintmnALVm0, {from: accounts[3]});

		assert.equal(uintOSzQ5Br, BigInt("0"))
		await expect(QuickTokenT052Rpu.transfer.call(addressGxL0xfO, uintmnALVm0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresscNpnxND = accounts[4]
		const addressDrGSQs = accounts[3]
		const QuickTokenKaLZ9wj = await QuickToken.new(addresscNpnxND, addressDrGSQs, {from: "0x0000000000000000000000000000000000000001"});
		const uintlCbrjCv = BigInt("1635")
		const addressMXLgGf = accounts[1]
		const uintmtehSe0 = BigInt("1699")
		const addressXLKFpI9 = accounts[0]
		const uintEcWRcZY = BigInt("214")
		const addressZ63Rh5W = accounts[0]
		const boolxXEHjTW = await QuickTokenKaLZ9wj.transfer.call(addressMXLgGf, uintlCbrjCv, {from: accounts[3]});
		const boolsDB7nA = await QuickTokenKaLZ9wj.approve.call(addressXLKFpI9, uintmtehSe0, {from: accounts[2]});
		const boolyHTuClU = await QuickTokenKaLZ9wj.approve.call(addressZ63Rh5W, uintEcWRcZY, {from: accounts[3]});
	});

	it('test for QuickToken', async () => {
		const addressM8rJIzn = accounts[0]
		const addressXgBDzh1 = accounts[4]
		const QuickTokengRMiMxC = await QuickToken.new(addressM8rJIzn, addressXgBDzh1, {from: accounts[5]});
		const uintYodtmkW = BigInt("1261")
		const addressvL8Avua = accounts[0]
		const addressUQuui0n = accounts[0]
		const addressbTwyv64 = accounts[1]
//		const addressouVjGA8 = await QuickTokengRMiMxC.mint.call(addressvL8Avua, uintYodtmkW, {from: accounts[2]});
//		const uintGI32BH = await QuickTokengRMiMxC.allowance.call(addressbTwyv64, addressUQuui0n, {from: accounts[2]});

		await expect(QuickTokengRMiMxC.mint.call(addressvL8Avua, uintYodtmkW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressVplxifc = accounts[0]
		const addressBVyUlrw = accounts[1]
		const QuickTokenHGqjSfC = await QuickToken.new(addressVplxifc, addressBVyUlrw, {from: accounts[0]});
		const addressmy7wkQ7 = accounts[1]
		const addressLldXFfY = accounts[5]
		const addressep57dOz = accounts[1]
		const uint5CR9V3 = BigInt("284")
		const addressiUWfG3h = accounts[1]
		const uintDpjvfQC = BigInt("1465")
		const addressaI6G6zQ = accounts[0]
		const addressXH2SnHj = accounts[2]
		const uintbPF6G8K = await QuickTokenHGqjSfC.allowance.call(addressLldXFfY, addressmy7wkQ7, {from: "0x0000000000000000000000000000000000000001"});
//		const addressPBzrEX3 = await QuickTokenHGqjSfC.setMinter.call(addressep57dOz, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxyiOLdJ = await QuickTokenHGqjSfC.approve.call(addressiUWfG3h, uint5CR9V3, {from: accounts[1]});
//		const addressnB7w9ZW = await QuickTokenHGqjSfC.mint.call(addressaI6G6zQ, uintDpjvfQC, {from: accounts[3]});
//		const addressujnYJ4 = await QuickTokenHGqjSfC.setMinter.call(addressXH2SnHj, {from: accounts[1]});

		assert.equal(uintbPF6G8K, BigInt("0"))
		await expect(QuickTokenHGqjSfC.setMinter.call(addressep57dOz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressxAfq2T6 = accounts[1]
		const addressodlRWd0 = accounts[3]
		const QuickTokenpeOgiNN = await QuickToken.new(addressxAfq2T6, addressodlRWd0, {from: accounts[4]});
		const uintTYK93Yy = BigInt("1531")
		const addressVhsKLiR = accounts[4]
		const addressBYke32x = accounts[4]
		const addressbSx5Yz = "0x0000000000000000000000000000000000000001"
		const uintBF4Wce = BigInt("1136")
		const addressXjIty7F = accounts[2]
//		const bool8v5EMi = await QuickTokenpeOgiNN.transferFrom.call(addressBYke32x, addressVhsKLiR, uintTYK93Yy, {from: accounts[1]});
//		const uintU1ngENc = await QuickTokenpeOgiNN.balanceOf.call(addressbSx5Yz, {from: accounts[4]});
//		const boolEoPByEa = await QuickTokenpeOgiNN.approve.call(addressXjIty7F, uintBF4Wce, {from: accounts[0]});

		await expect(QuickTokenpeOgiNN.transferFrom.call(addressBYke32x, addressVhsKLiR, uintTYK93Yy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressYqSdQcc = accounts[3]
		const addressys8NlsI = accounts[0]
		const QuickTokenAcXzyXz = await QuickToken.new(addressYqSdQcc, addressys8NlsI, {from: accounts[0]});
		const uintE8KexfS = BigInt("755")
		const addressfEqmTt = accounts[2]
		const addressanC8Bi = accounts[1]
		const addressd3O6c2B = accounts[1]
		const addressNSW0HYV = accounts[0]
		const addressk4RoBQA = accounts[3]
		const uintfzCGOs8 = BigInt("1828")
		const addressUJRAZuB = accounts[4]
		const uintLk5RzdL = BigInt("319")
		const addressavkxDB7 = accounts[0]
		const uintsM7Oava = BigInt("1600")
		const addressNlbG3Fa = accounts[4]
		const addressGFEtDd1 = accounts[0]
		const addressa22u6Y5 = accounts[4]
		const addressAfL420r = accounts[3]
		const uintnFDTMkY = BigInt("431")
		const addressmMLE3NM = accounts[3]
		const booluMvgKqy = await QuickTokenAcXzyXz.approve.call(addressfEqmTt, uintE8KexfS, {from: accounts[1]});
		const uintcQZxa9r = await QuickTokenAcXzyXz.allowance.call(addressd3O6c2B, addressanC8Bi, {from: accounts[0]});
		const uintwnJJmYz = await QuickTokenAcXzyXz.allowance.call(addressk4RoBQA, addressNSW0HYV, {from: accounts[1]});
		const boolIZCvZ8n = await QuickTokenAcXzyXz.approve.call(addressUJRAZuB, uintfzCGOs8, {from: accounts[1]});
		const addressebFkgSa = await QuickTokenAcXzyXz.mint.call(addressavkxDB7, uintLk5RzdL, {from: accounts[0]});
//		const boolC5AkJwY = await QuickTokenAcXzyXz.transfer.call(addressNlbG3Fa, uintsM7Oava, {from: accounts[0]});
//		const addressZHZuJ1 = await QuickTokenAcXzyXz.setMinter.call(addressGFEtDd1, {from: accounts[0]});
//		const uintpjr03rR = await QuickTokenAcXzyXz.allowance.call(addressAfL420r, addressa22u6Y5, {from: accounts[4]});
//		const boolRsd5hjy = await QuickTokenAcXzyXz.approve.call(addressmMLE3NM, uintnFDTMkY, {from: accounts[1]});

		assert.equal(boolIZCvZ8n, true)
		assert.equal(booluMvgKqy, true)
		assert.equal(uintcQZxa9r, BigInt("0"))
		assert.equal(uintwnJJmYz, BigInt("0"))
		await expect(QuickTokenAcXzyXz.transfer.call(addressNlbG3Fa, uintsM7Oava, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})