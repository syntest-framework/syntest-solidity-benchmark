const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringd7ehNns = "wESdqcNm0aofY24"
		const stringTyuabf2 = "fwRsJJ28MA9DmDKD2kGOM0kbU4ht7R3"
		const uintiN9DNL = BigInt("133")
		const NALzEDFBnF = await NAL.new(stringd7ehNns, stringTyuabf2, uintiN9DNL, {from: accounts[3]});
		const uintrpgibeP = BigInt("1856")
		const addresspfmKeRQ = accounts[1]
		const addressIt9wdu8 = accounts[0]
		const addressE78AXs = "0x0000000000000000000000000000000000000001"
		const boolQ2nCjAJ = await NALzEDFBnF.transferFrom.call(addressIt9wdu8, addresspfmKeRQ, uintrpgibeP, {from: accounts[4]});
		const boolwt82CpI = await NALzEDFBnF.isAdmin.call(addressE78AXs, {from: accounts[1]});
		await NALzEDFBnF.pause.call({from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALZSNi05i = await NAL.new({from: accounts[1]});
		const addressid14h9I = accounts[0]
		const addressQtqmd9H = await NALZSNi05i.notFrozen.call(addressid14h9I, {from: accounts[0]});
		await NALZSNi05i.pause.call({from: accounts[2]});

		await expect(NALZSNi05i.notFrozen.call(addressid14h9I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressnq14O0 = accounts[2]
		const uintDu7Dfa = BigInt("1880")
		const addressDACpxt = accounts[5]
		const addressH1gJXbr = "0x0000000000000000000000000000000000000001"
		const addressCDNJWAJ = accounts[2]
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressnq14O0, {from: "0x0000000000000000000000000000000000000001"});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressH1gJXbr, addressDACpxt, uintDu7Dfa, {from: accounts[2]});
		const addressU8RQMIQ = await NALweAbYEL.notFrozen.call(addressCDNJWAJ, {from: accounts[4]});

		assert.equal(uint256QK3tgUA, BigInt("0"))
		await expect(NALweAbYEL.transferFrom.call(addressH1gJXbr, addressDACpxt, uintDu7Dfa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpv3tMXp = await NAL.new({from: accounts[0]});
		const uintm9OCH0z = BigInt("751")
		const addressyIpinSD = accounts[0]
		const addressHStm3Zp = accounts[2]
		const uintLYa4lpQ = BigInt("877")
		const addressoyRHH3 = accounts[3]
		const addressbmpBtdv = accounts[3]
		const uintuNbiK7R = BigInt("585")
		const addressvvx44mY = accounts[1]
		const booliplgdv4 = await NALpv3tMXp.decreaseAllowance.call(addressyIpinSD, uintm9OCH0z, {from: "0x0000000000000000000000000000000000000001"});
		const addressELWBTMB = await NALpv3tMXp.transferOwnership.call(addressHStm3Zp, {from: accounts[3]});
		const boolN18Nk5q = await NALpv3tMXp.transferFrom.call(addressbmpBtdv, addressoyRHH3, uintLYa4lpQ, {from: "0x0000000000000000000000000000000000000001"});
		await NALpv3tMXp.pause.call({from: accounts[2]});
		const boollmwv5hl = await NALpv3tMXp.unlock.call(addressvvx44mY, uintuNbiK7R, {from: accounts[1]});

		await expect(NALpv3tMXp.decreaseAllowance.call(addressyIpinSD, uintm9OCH0z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCmWLSxk = await NAL.new({from: accounts[1]});
		const uintB0MmEPg = BigInt("112")
		const addresskxeBgHl = accounts[5]
		const addressLHDtht = accounts[4]
		const addressY17wSsx = accounts[2]
		await NALCmWLSxk.unpause.call({from: accounts[5]});
		const boolABkgCDH = await NALCmWLSxk.unlock.call(addresskxeBgHl, uintB0MmEPg, {from: accounts[3]});
		await NALCmWLSxk.unpause.call({from: accounts[0]});
		const uint256pfIWUEe = await NALCmWLSxk.allowance.call(addressY17wSsx, addressLHDtht, {from: accounts[1]});

		await expect(NALCmWLSxk.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVEwMQP7 = await NAL.new({from: accounts[0]});
		const uintvxxmWUb = BigInt("841")
		const addressb6oWr9N = accounts[0]
		const uintlgSrDWC = BigInt("701")
		const address76rCpL = accounts[4]
		const addressgDTrBY = accounts[3]
		const addressCjesZzo = accounts[0]
		const addressVGNB4G = accounts[1]
		const uintQAOHfhQ = BigInt("396")
		const addressYPHJTTV = "0x0000000000000000000000000000000000000001"
		const boolJiXv0O = await NALVEwMQP7.approve.call(addressb6oWr9N, uintvxxmWUb, {from: accounts[2]});
		const boolHQ9xada = await NALVEwMQP7.transferFrom.call(addressgDTrBY, address76rCpL, uintlgSrDWC, {from: accounts[0]});
		const addressQbyZw9D = await NALVEwMQP7.upgradeTo.call(addressCjesZzo, {from: accounts[0]});
		const boolXzgfJ5y = await NALVEwMQP7.isOwner.call(addressVGNB4G, {from: accounts[1]});
		const boolaDzPzaf = await NALVEwMQP7.unlock.call(addressYPHJTTV, uintQAOHfhQ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJiXv0O, true)
		await expect(NALVEwMQP7.transferFrom.call(addressgDTrBY, address76rCpL, uintlgSrDWC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALrOTDAr4 = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQvtpqjZ = BigInt("1362")
		const addressi4npMk = accounts[4]
		const address0fcqBx = accounts[2]
		const uintVhTrPeQ = BigInt("294")
		const addressDBt4uQ7 = accounts[2]
		const addressuFglvMM = accounts[1]
		const addressUSmeQiL = accounts[5]
		const boolRjicAYZ = await NALrOTDAr4.decreaseAllowance.call(addressi4npMk, uintQvtpqjZ, {from: accounts[0]});
		const boolSCK1coa = await NALrOTDAr4.isOwner.call(address0fcqBx, {from: accounts[3]});
		const boolMscxKJn = await NALrOTDAr4.transferFrom.call(addressuFglvMM, addressDBt4uQ7, uintVhTrPeQ, {from: accounts[4]});
		const boolfmoKDgR = await NALrOTDAr4.freezeAccount.call(addressUSmeQiL, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressG6W00t = accounts[2]
		const uintrK5cQO = BigInt("1880")
		const addressKGiSaN = accounts[6]
		const addresstZZZRBe = "0x0000000000000000000000000000000000000001"
		const addressXLBze8P = accounts[0]
		const addresszQf4yDq = accounts[2]
		const stringxOHBtPn = await NALweAbYEL.symbol.call({from: accounts[0]});
		await NALweAbYEL.unpause.call({from: accounts[2]});
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressG6W00t, {from: "0x0000000000000000000000000000000000000001"});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addresstZZZRBe, addressKGiSaN, uintrK5cQO, {from: accounts[2]});
		const addressVeZpAIE = await NALweAbYEL.removeAdmin.call(addressXLBze8P, {from: accounts[1]});
		const addressU8RQMIQ = await NALweAbYEL.notFrozen.call(addresszQf4yDq, {from: accounts[4]});

		assert.equal(stringxOHBtPn, "NAL")
		await expect(NALweAbYEL.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressEfgnojS = accounts[2]
		const uinteQUlNuj = BigInt("1880")
		const addressWsgJdbE = accounts[5]
		const addressdaTXxs = "0x0000000000000000000000000000000000000001"
		const uintU3a2utl = BigInt("88")
		const addresshh1Epg0 = "0x0000000000000000000000000000000000000001"
		const addressu0lPbQk = accounts[2]
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressEfgnojS, {from: "0x0000000000000000000000000000000000000001"});
		const uint8kXhqG4 = await NALweAbYEL.decimals.call({from: accounts[4]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressdaTXxs, addressWsgJdbE, uinteQUlNuj, {from: accounts[2]});
		const boolx6TuWXk = await NALweAbYEL.transfer.call(addresshh1Epg0, uintU3a2utl, {from: accounts[3]});
		const addressU8RQMIQ = await NALweAbYEL.notFrozen.call(addressu0lPbQk, {from: accounts[4]});

		assert.equal(uint256QK3tgUA, BigInt("0"))
		assert.equal(uint8kXhqG4, BigInt("18"))
		await expect(NALweAbYEL.transferFrom.call(addressdaTXxs, addressWsgJdbE, uinteQUlNuj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressPo7NgmN = accounts[2]
		const addressmNXVkPC = accounts[4]
		const uintfLJpp45 = BigInt("1880")
		const addressfnACkf = accounts[5]
		const addressQr9HkMU = "0x0000000000000000000000000000000000000001"
		const addressRDyuulY = accounts[2]
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressPo7NgmN, {from: "0x0000000000000000000000000000000000000001"});
		await NALweAbYEL.renounceAdmin.call({from: accounts[4]});
		const boolFB1SDJu = await NALweAbYEL.unfreezeAccount.call(addressmNXVkPC, {from: accounts[2]});
		const uint256rqB9ro9 = await NALweAbYEL.totalSupply.call({from: accounts[2]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressQr9HkMU, addressfnACkf, uintfLJpp45, {from: accounts[2]});
		const addressU8RQMIQ = await NALweAbYEL.notFrozen.call(addressRDyuulY, {from: accounts[4]});

		assert.equal(uint256QK3tgUA, BigInt("0"))
		await expect(NALweAbYEL.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtJLnJPx = await NAL.new({from: accounts[1]});
		const uintr2TvWY = BigInt("798")
		const uintQOtmeki = BigInt("644")
		const addressAASekyf = accounts[4]
		const addresszKvwL4s = "0x0000000000000000000000000000000000000001"
		const uintPv8Ljfw = BigInt("419")
		const addressLcCesvG = accounts[0]
		const addressopCxQ5I = accounts[3]
		const addressCYA1APJ = accounts[3]
		const addresste8eIw9 = accounts[0]
		const addressfosKTws = accounts[2]
		const uint256RJLe9iC = await NALtJLnJPx.burn.call(uintr2TvWY, {from: "0x0000000000000000000000000000000000000001"});
		await NALtJLnJPx.pause.call({from: accounts[2]});
		const boolNKK3Y05 = await NALtJLnJPx.transferFrom.call(addresszKvwL4s, addressAASekyf, uintQOtmeki, {from: accounts[3]});
		const boolEG8ej7z = await NALtJLnJPx.transferFrom.call(addressopCxQ5I, addressLcCesvG, uintPv8Ljfw, {from: accounts[1]});
		const uint256JqMLVKc = await NALtJLnJPx.allowance.call(addresste8eIw9, addressCYA1APJ, {from: accounts[0]});
		const boolCzplHpJ = await NALtJLnJPx.unfreezeAccount.call(addressfosKTws, {from: accounts[5]});

		await expect(NALtJLnJPx.burn.call(uintr2TvWY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressC6SgDM = accounts[2]
		const uintvBVxAEx = BigInt("1880")
		const addressbaZDUZX = accounts[6]
		const addresskhm5wr4 = "0x0000000000000000000000000000000000000001"
		const addresslSTdoPn = accounts[1]
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressC6SgDM, {from: "0x0000000000000000000000000000000000000001"});
		const boolVGqIHco = await NALweAbYEL.paused.call({from: accounts[2]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addresskhm5wr4, addressbaZDUZX, uintvBVxAEx, {from: accounts[2]});
		const addressrN2F86d = await NALweAbYEL.notFrozen.call(addresslSTdoPn, {from: accounts[3]});

		assert.equal(boolVGqIHco, false)
		assert.equal(uint256QK3tgUA, BigInt("0"))
		await expect(NALweAbYEL.transferFrom.call(addresskhm5wr4, addressbaZDUZX, uintvBVxAEx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressxJJKLGg = accounts[5]
		const addressCSo0Zs = accounts[0]
		const addresslSkQ5qS = accounts[2]
		const uint256ProxM2 = await NALweAbYEL.allowance.call(addressCSo0Zs, addressxJJKLGg, {from: accounts[4]});
		const uint8ns5gcL6 = await NALweAbYEL.decimals.call({from: accounts[1]});
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addresslSkQ5qS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ProxM2, BigInt("0"))
		assert.equal(uint256QK3tgUA, BigInt("0"))
		assert.equal(uint8ns5gcL6, BigInt("18"))
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const uintjtQCVbX = BigInt("1880")
		const addressCZJWW2k = accounts[8]
		const addressdi67wqg = "0x0000000000000000000000000000000000000001"
		const uintKxt60g = BigInt("619")
		const addressteqAwCD = accounts[2]
		const addressaDsS8VL = accounts[2]
		const uintfDk3T3K = BigInt("549")
		const addressEkxTUa = accounts[1]
		const addressQ8136Cw = accounts[2]
		const uint256lrUzWZQ = await NALweAbYEL.totalSupply.call({from: accounts[0]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressdi67wqg, addressCZJWW2k, uintjtQCVbX, {from: accounts[2]});
		const boolHAR8Yg9 = await NALweAbYEL.decreaseAllowance.call(addressteqAwCD, uintKxt60g, {from: accounts[2]});
		const addressU8RQMIQ = await NALweAbYEL.notFrozen.call(addressaDsS8VL, {from: accounts[4]});
		const boolMHNGqcc = await NALweAbYEL.transfer.call(addressEkxTUa, uintfDk3T3K, {from: accounts[3]});
		const boolNpt65jl = await NALweAbYEL.isOwner.call(addressQ8136Cw, {from: accounts[0]});

		assert.equal(uint256lrUzWZQ, BigInt("2000000000000000000000000000"))
		await expect(NALweAbYEL.transferFrom.call(addressdi67wqg, addressCZJWW2k, uintjtQCVbX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressAPPyTjG = accounts[2]
		const uintTOMGaQU = BigInt("547")
		const addresspbPkxg = accounts[4]
		const addressvqnQc42 = accounts[4]
		const uintToHTokm = BigInt("1880")
		const addressp2HIasQ = accounts[5]
		const addressUG6WXXz = "0x0000000000000000000000000000000000000001"
		const uintrImq3df = BigInt("1037")
		const addressUIHCP5d = accounts[3]
		const addressMq1yokw = accounts[1]
		const addresskzNOp2j = accounts[2]
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressAPPyTjG, {from: "0x0000000000000000000000000000000000000001"});
		const addressTL22wBe = await NALweAbYEL.burnFrom.call(addresspbPkxg, uintTOMGaQU, {from: accounts[3]});
		const boolFB1SDJu = await NALweAbYEL.unfreezeAccount.call(addressvqnQc42, {from: accounts[2]});
		const uint256rqB9ro9 = await NALweAbYEL.totalSupply.call({from: accounts[2]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressUG6WXXz, addressp2HIasQ, uintToHTokm, {from: accounts[2]});
		const boolFQImQcj = await NALweAbYEL.transferFrom.call(addressMq1yokw, addressUIHCP5d, uintrImq3df, {from: accounts[1]});
		const addressU8RQMIQ = await NALweAbYEL.notFrozen.call(addresskzNOp2j, {from: accounts[4]});

		assert.equal(uint256QK3tgUA, BigInt("0"))
		await expect(NALweAbYEL.burnFrom.call(addresspbPkxg, uintTOMGaQU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addresss11iW0 = accounts[2]
		const uintYF7qgDa = BigInt("708")
		const addressBZiLcTr = accounts[4]
		const uintrIt1yNV = BigInt("1880")
		const addressxzFvpiG = accounts[6]
		const addressLcJIpkK = "0x0000000000000000000000000000000000000002"
		const uint256ua5Vvc3 = await NALweAbYEL.totalSupply.call({from: accounts[1]});
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addresss11iW0, {from: "0x0000000000000000000000000000000000000001"});
		const boolYwxhSd9 = await NALweAbYEL.transfer.call(addressBZiLcTr, uintYF7qgDa, {from: accounts[0]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressLcJIpkK, addressxzFvpiG, uintrIt1yNV, {from: accounts[2]});

		assert.equal(boolYwxhSd9, true)
		assert.equal(uint256QK3tgUA, BigInt("0"))
		assert.equal(uint256ua5Vvc3, BigInt("2000000000000000000000000000"))
		await expect(NALweAbYEL.transferFrom.call(addressLcJIpkK, addressxzFvpiG, uintrIt1yNV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const uintPUpS2ga = BigInt("1067")
		const addressQFLplEl = accounts[1]
		const addressLAenKTq = accounts[4]
		const address3j1IJ7 = accounts[5]
		const addressfgBtBus = accounts[2]
		const addressNQCWTH6 = accounts[5]
		const boolbwEGp1j = await NALweAbYEL.increaseAllowance.call(addressQFLplEl, uintPUpS2ga, {from: accounts[4]});
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressLAenKTq, {from: "0x0000000000000000000000000000000000000001"});
		await NALweAbYEL.whenPaused.call({from: accounts[5]});
		const boolFB1SDJu = await NALweAbYEL.unfreezeAccount.call(address3j1IJ7, {from: accounts[2]});
		const uint256G0zJEZF = await NALweAbYEL.allowance.call(addressNQCWTH6, addressfgBtBus, {from: accounts[5]});

		assert.equal(boolbwEGp1j, true)
		assert.equal(uint256QK3tgUA, BigInt("0"))
		await expect(NALweAbYEL.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressbKgK4tJ = accounts[0]
		const addressSVtGqr4 = accounts[2]
		const uintElfDy0c = BigInt("1880")
		const addressuMlZFyj = accounts[6]
		const addressqQEpUOX = "0x0000000000000000000000000000000000000001"
		const addresseFgehFd = await NALweAbYEL.upgradeTo.call(addressbKgK4tJ, {from: accounts[0]});
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressSVtGqr4, {from: "0x0000000000000000000000000000000000000001"});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressqQEpUOX, addressuMlZFyj, uintElfDy0c, {from: accounts[2]});

		assert.equal(uint256QK3tgUA, BigInt("0"))
		await expect(NALweAbYEL.transferFrom.call(addressqQEpUOX, addressuMlZFyj, uintElfDy0c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const uintGqjaWB2 = BigInt("281")
		const address60gz0M = accounts[3]
		const addressYNEcEiD = accounts[6]
		const boolHnHyBQJ = await NALweAbYEL.unlock.call(address60gz0M, uintGqjaWB2, {from: accounts[0]});
		const boolFB1SDJu = await NALweAbYEL.unfreezeAccount.call(addressYNEcEiD, {from: accounts[2]});

		await expect(NALweAbYEL.unlock.call(address60gz0M, uintGqjaWB2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const uintImD42JA = BigInt("708")
		const addresstDsPs6H = accounts[5]
		const uintwhm6v5j = BigInt("1880")
		const addresswZODCzU = accounts[7]
		const addressx8ux6rs = "0x0000000000000000000000000000000000000002"
		const stringQyfPAwB = await NALweAbYEL.name.call({from: accounts[3]});
		const uint256ua5Vvc3 = await NALweAbYEL.totalSupply.call({from: accounts[1]});
		await NALweAbYEL.whenPaused.call({from: accounts[3]});
		const boolYwxhSd9 = await NALweAbYEL.transfer.call(addresstDsPs6H, uintImD42JA, {from: accounts[0]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressx8ux6rs, addresswZODCzU, uintwhm6v5j, {from: accounts[2]});

		assert.equal(stringQyfPAwB, "Personal Token")
		assert.equal(uint256ua5Vvc3, BigInt("2000000000000000000000000000"))
		await expect(NALweAbYEL.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addresszW82DwO = accounts[3]
		const uintQCqDJg = BigInt("1977")
		const uinth9eXaVN = BigInt("674")
		const addressNnVo5Cb = accounts[3]
		const uintIbfk9kr = BigInt("708")
		const addressZsiI6RQ = accounts[6]
		const uintTd3uTuu = BigInt("1880")
		const addressesQONX8 = accounts[6]
		const addresskGPd8lU = "0x0000000000000000000000000000000000000002"
		const addresszgxqeVW = await NALweAbYEL.transferOwnership.call(addresszW82DwO, {from: accounts[0]});
		const boolWWleY6m = await NALweAbYEL.transferWithLock.call(addressNnVo5Cb, uinth9eXaVN, uintQCqDJg, {from: accounts[0]});
		const uint256ua5Vvc3 = await NALweAbYEL.totalSupply.call({from: accounts[1]});
		const boolYwxhSd9 = await NALweAbYEL.transfer.call(addressZsiI6RQ, uintIbfk9kr, {from: accounts[0]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addresskGPd8lU, addressesQONX8, uintTd3uTuu, {from: accounts[2]});

		assert.equal(boolWWleY6m, true)
		assert.equal(boolYwxhSd9, true)
		assert.equal(uint256ua5Vvc3, BigInt("2000000000000000000000000000"))
		await expect(NALweAbYEL.transferFrom.call(addresskGPd8lU, addressesQONX8, uintTd3uTuu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALzxTq8HW = await NAL.new({from: accounts[2]});
		const addressPYQLIqY = accounts[3]
		const stringPWNLfr = await NALzxTq8HW.name.call({from: accounts[3]});
		const stringSvk41KO = await NALzxTq8HW.symbol.call({from: accounts[4]});
		const addressMbrp9xm = await NALzxTq8HW.addAdmin.call(addressPYQLIqY, {from: accounts[2]});
		const uint256jVqRnJJ = await NALzxTq8HW.totalSupply.call({from: accounts[1]});

		assert.equal(stringPWNLfr, "Personal Token")
		assert.equal(stringSvk41KO, "NAL")
		assert.equal(uint256jVqRnJJ, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressSC5Osk = accounts[4]
		const uint256QK3tgUA = await NALweAbYEL.balanceOf.call(addressSC5Osk, {from: "0x0000000000000000000000000000000000000001"});
		await NALweAbYEL.pause.call({from: accounts[0]});

		assert.equal(uint256QK3tgUA, BigInt("0"))
		await expect(NALweAbYEL.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressrWdekd = accounts[3]
		const uintOxdLcLJ = BigInt("1977")
		const uintTSfNQxg = BigInt("674")
		const addressChV23RH = accounts[3]
		const addressgc4nbov = accounts[0]
		const uintqpDxcXY = BigInt("708")
		const addressNkoij0 = accounts[6]
		const uintYIQC0gp = BigInt("1880")
		const addressLiXjBGN = accounts[6]
		const addressGtauag4 = "0x0000000000000000000000000000000000000002"
		const uintzJTKU5F = BigInt("1207")
		const addressCazf14Y = accounts[1]
		const addresszgxqeVW = await NALweAbYEL.transferOwnership.call(addressrWdekd, {from: accounts[0]});
		const boolWWleY6m = await NALweAbYEL.transferWithLock.call(addressChV23RH, uintTSfNQxg, uintOxdLcLJ, {from: accounts[0]});
		const uint256ua5Vvc3 = await NALweAbYEL.totalSupply.call({from: accounts[1]});
		const boolrI281id = await NALweAbYEL.isOwner.call(addressgc4nbov, {from: accounts[5]});
		const boolYwxhSd9 = await NALweAbYEL.transfer.call(addressNkoij0, uintqpDxcXY, {from: accounts[0]});
		const boolOafNAoY = await NALweAbYEL.transferFrom.call(addressGtauag4, addressLiXjBGN, uintYIQC0gp, {from: accounts[2]});
		const boolBDIQruL = await NALweAbYEL.decreaseAllowance.call(addressCazf14Y, uintzJTKU5F, {from: accounts[5]});

		assert.equal(boolWWleY6m, true)
		assert.equal(boolYwxhSd9, true)
		assert.equal(boolrI281id, true)
		assert.equal(uint256ua5Vvc3, BigInt("2000000000000000000000000000"))
		await expect(NALweAbYEL.transferFrom.call(addressGtauag4, addressLiXjBGN, uintYIQC0gp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressyBefCx = "0x0000000000000000000000000000000000000001"
		const uintCpwl69A = BigInt("441")
		const addresstUIHXEW = accounts[4]
		const uintyAcIGl = BigInt("81")
		const addressIEv2WUb = accounts[2]
		const boolfPRGvQx = await NALweAbYEL.freezeAccount.call(addressyBefCx, {from: accounts[0]});
		const boolHnHyBQJ = await NALweAbYEL.unlock.call(addresstUIHXEW, uintCpwl69A, {from: accounts[0]});
		const boolJALEG22 = await NALweAbYEL.unlock.call(addressIEv2WUb, uintyAcIGl, {from: accounts[1]});
		await NALweAbYEL.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfPRGvQx, true)
		await expect(NALweAbYEL.unlock.call(addresstUIHXEW, uintCpwl69A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALweAbYEL = await NAL.new({from: accounts[0]});
		const addressqXHlMa = accounts[3]
		const uintTHNdPOW = BigInt("16")
		const addressVLnPYNI = accounts[5]
		const boolTs49kTo = await NALweAbYEL.unfreezeAccount.call(addressqXHlMa, {from: accounts[0]});
		await NALweAbYEL.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const bool1y7A6L = await NALweAbYEL.transfer.call(addressVLnPYNI, uintTHNdPOW, {from: accounts[2]});

		await expect(NALweAbYEL.unfreezeAccount.call(addressqXHlMa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})