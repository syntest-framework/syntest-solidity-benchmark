const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringXI0ZQgb = "wPo9CVd"
		const stringoIjmhRx = "7nYtQP94"
		const uintF8e5DJa = BigInt("60")
		const AntiBaseProtocolvS52YAP = await AntiBaseProtocol.new(stringXI0ZQgb, stringoIjmhRx, uintF8e5DJa, {from: accounts[1]});
		const addressDROSUgR = await AntiBaseProtocolvS52YAP.owner.call({from: accounts[5]});
		const uint8EcIy5gQ = await AntiBaseProtocolvS52YAP.decimals.call({from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoltrUcaDb = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		await AntiBaseProtocoltrUcaDb.renounceOwnership.call({from: accounts[1]});
		await AntiBaseProtocoltrUcaDb.requestGas.call({from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolNaVc3y9 = await AntiBaseProtocol.new({from: accounts[3]});
		const uintlQaScdo = BigInt("657")
		const addressDZv8eg = "0x0000000000000000000000000000000000000001"
		const uintCULiud3 = BigInt("782")
		const uintp1sOx4Q = BigInt("1653")
		const addresswiyvGq6 = accounts[0]
		const addresst19F1r2 = accounts[2]
		const uintNW7i5y3 = BigInt("1908")
		const addressitos2Kb = accounts[0]
		const addressN5qa6k7 = accounts[3]
//		const addressS5sxOfK = await AntiBaseProtocolNaVc3y9._burn.call(addressDZv8eg, uintlQaScdo, {from: accounts[3]});
//		await AntiBaseProtocolNaVc3y9.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256HFdpRGx = await AntiBaseProtocolNaVc3y9.findRewardFee.call(uintCULiud3, {from: accounts[4]});
//		const boolYRIziLM = await AntiBaseProtocolNaVc3y9.transferFrom.call(addresst19F1r2, addresswiyvGq6, uintp1sOx4Q, {from: accounts[0]});
//		const boolDGEXbZ2 = await AntiBaseProtocolNaVc3y9.transferFrom.call(addressN5qa6k7, addressitos2Kb, uintNW7i5y3, {from: accounts[4]});
//		await AntiBaseProtocolNaVc3y9.requestGas.call({from: accounts[0]});

		await expect(AntiBaseProtocolNaVc3y9._burn.call(addressDZv8eg, uintlQaScdo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolUNjWEte = await AntiBaseProtocol.new({from: accounts[3]});
		const uintWp9UbQ = BigInt("183")
		const addressnnLkBhg = accounts[5]
		const uintHjRKdyJ = BigInt("140")
		const addressU1m4zLt = accounts[0]
		const uintu6rcwg = BigInt("114")
		const addressRqfRhgD = "0x0000000000000000000000000000000000000001"
		const uintAUzhsNG = BigInt("1683")
		const addressoubnRK3 = accounts[2]
		const addressb1WaPrN = "0x0000000000000000000000000000000000000001"
//		const addressMS8I8ho = await AntiBaseProtocolUNjWEte.burnFrom.call(addressnnLkBhg, uintWp9UbQ, {from: accounts[2]});
//		const boolZIX1om0 = await AntiBaseProtocolUNjWEte.transfer.call(addressU1m4zLt, uintHjRKdyJ, {from: accounts[2]});
//		const uint256xFeo1DX = await AntiBaseProtocolUNjWEte.totalSupply.call({from: accounts[5]});
//		const addressZRidRNK = await AntiBaseProtocolUNjWEte._mint.call(addressRqfRhgD, uintu6rcwg, {from: accounts[5]});
//		const boolCYjH5VT = await AntiBaseProtocolUNjWEte.transferFrom.call(addressb1WaPrN, addressoubnRK3, uintAUzhsNG, {from: accounts[2]});

		await expect(AntiBaseProtocolUNjWEte.burnFrom.call(addressnnLkBhg, uintWp9UbQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolzHpnlbh = await AntiBaseProtocol.new({from: accounts[2]});
		const uintmymxKBr = BigInt("1236")
		const addressHs2qetQ = accounts[3]
		const uintvJaaRHx = BigInt("515")
		const addressxLl0ft = accounts[3]
//		const boolHnoArpX = await AntiBaseProtocolzHpnlbh.transfer.call(addressHs2qetQ, uintmymxKBr, {from: accounts[0]});
//		const addressJmt5z2i = await AntiBaseProtocolzHpnlbh._burn.call(addressxLl0ft, uintvJaaRHx, {from: accounts[1]});

		await expect(AntiBaseProtocolzHpnlbh.transfer.call(addressHs2qetQ, uintmymxKBr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolz4ZpmOm = await AntiBaseProtocol.new({from: accounts[3]});
		const uintcWIPIwB = BigInt("1752")
		const addresswqen8Uz = "0x0000000000000000000000000000000000000001"
		const addressUIQ9zxl = accounts[0]
		const uintDmsuRpt = BigInt("1792")
		const addressE6kdp8e = accounts[1]
		const stringng4mKOV = await AntiBaseProtocolz4ZpmOm.name.call({from: accounts[1]});
//		const addressSxmDI4Z = await AntiBaseProtocolz4ZpmOm._approve.call(addressUIQ9zxl, addresswqen8Uz, uintcWIPIwB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUny1w9q = await AntiBaseProtocolz4ZpmOm.approve.call(addressE6kdp8e, uintDmsuRpt, {from: accounts[2]});
//		await AntiBaseProtocolz4ZpmOm.requestGas.call({from: accounts[1]});
//		const stringw6ssktY = await AntiBaseProtocolz4ZpmOm.name.call({from: accounts[0]});

		assert.equal(stringng4mKOV, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolz4ZpmOm._approve.call(addressUIQ9zxl, addresswqen8Uz, uintcWIPIwB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolzHpnlbh = await AntiBaseProtocol.new({from: accounts[2]});
		const uintbanjSjy = BigInt("1523")
		const addressX1KFO1 = accounts[3]
		const uintBwX4ZC7 = BigInt("884")
		const addressBRX7USz = "0x0000000000000000000000000000000000000001"
		const uintTyazR13 = BigInt("1236")
		const addressUPA9qT3 = accounts[3]
		const booliZ7twks = await AntiBaseProtocolzHpnlbh.approve.call(addressX1KFO1, uintbanjSjy, {from: accounts[4]});
//		const booltHSklJ = await AntiBaseProtocolzHpnlbh.transfer.call(addressBRX7USz, uintBwX4ZC7, {from: accounts[1]});
//		const boolHnoArpX = await AntiBaseProtocolzHpnlbh.transfer.call(addressUPA9qT3, uintTyazR13, {from: accounts[0]});

		assert.equal(booliZ7twks, true)
		await expect(AntiBaseProtocolzHpnlbh.transfer.call(addressBRX7USz, uintBwX4ZC7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolzHpnlbh = await AntiBaseProtocol.new({from: accounts[2]});
		const uintZIsICdQ = BigInt("1439")
		const addresseqYvWaq = accounts[2]
		const uintqMh7Q6r = BigInt("515")
		const addressGKLUQoo = accounts[4]
//		const boolnfV3cYQ = await AntiBaseProtocolzHpnlbh.decreaseAllowance.call(addresseqYvWaq, uintZIsICdQ, {from: accounts[5]});
//		const addressJmt5z2i = await AntiBaseProtocolzHpnlbh._burn.call(addressGKLUQoo, uintqMh7Q6r, {from: accounts[1]});

		await expect(AntiBaseProtocolzHpnlbh.decreaseAllowance.call(addresseqYvWaq, uintZIsICdQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocol97gjvf = await AntiBaseProtocol.new({from: accounts[1]});
		const addressupr7jQU = accounts[2]
		const uintPbTYCUU = BigInt("173")
		const addressMRIjtsJ = accounts[1]
		const stringWYXKQMY = await AntiBaseProtocol97gjvf.name.call({from: accounts[4]});
		const uint256Wc6QSPp = await AntiBaseProtocol97gjvf.totalSupply.call({from: accounts[2]});
//		const addressujMAQqr = await AntiBaseProtocol97gjvf.transferOwnership.call(addressupr7jQU, {from: accounts[4]});
//		const boolziiMerG = await AntiBaseProtocol97gjvf.approve.call(addressMRIjtsJ, uintPbTYCUU, {from: accounts[2]});

		assert.equal(stringWYXKQMY, "https://t.me/antibaseprotocol")
		assert.equal(uint256Wc6QSPp, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocol97gjvf.transferOwnership.call(addressupr7jQU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolym8ICpi = await AntiBaseProtocol.new({from: accounts[3]});
		const addressnJttbT6 = accounts[3]
		const addresshgohyJA = accounts[1]
		const uintx25pnZ2 = BigInt("1874")
		const address7id9an = accounts[4]
		const uintFo5CZf4 = BigInt("1438")
		const addressjM99ztg = accounts[0]
		const addressvpbx0W6 = accounts[4]
		const uintzQs1hR = BigInt("1319")
		const addressBip13tH = accounts[4]
		const uint256y2DUVZe = await AntiBaseProtocolym8ICpi.allowance.call(addresshgohyJA, addressnJttbT6, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgHI4rUw = await AntiBaseProtocolym8ICpi._mint.call(address7id9an, uintx25pnZ2, {from: accounts[5]});
//		const addressJnWzAZB = await AntiBaseProtocolym8ICpi._approve.call(addressvpbx0W6, addressjM99ztg, uintFo5CZf4, {from: accounts[3]});
//		const address0TJea6 = await AntiBaseProtocolym8ICpi._burnFrom.call(addressBip13tH, uintzQs1hR, {from: accounts[0]});

		assert.equal(uint256y2DUVZe, BigInt("0"))
		await expect(AntiBaseProtocolym8ICpi._mint.call(address7id9an, uintx25pnZ2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolGY6BKnK = await AntiBaseProtocol.new({from: accounts[2]});
		const addressAuFEyaL = accounts[0]
		const uintZ9aRKZA = BigInt("1367")
		const addressiLkEOiR = accounts[2]
		const addressSocFSg9 = accounts[4]
		const addressMdPNK0G = await AntiBaseProtocolGY6BKnK.owner.call({from: accounts[1]});
//		await AntiBaseProtocolGY6BKnK.onlyOwner.call({from: accounts[3]});
//		const addressGTUBqhB = await AntiBaseProtocolGY6BKnK._transferOwnership.call(addressAuFEyaL, {from: accounts[1]});
//		await AntiBaseProtocolGY6BKnK.requestGas.call({from: accounts[1]});
//		const addressdaY33PC = await AntiBaseProtocolGY6BKnK._mint.call(addressiLkEOiR, uintZ9aRKZA, {from: accounts[1]});
//		const addressMA5AMDc = await AntiBaseProtocolGY6BKnK.transferOwnership.call(addressSocFSg9, {from: accounts[0]});

		assert.equal(addressMdPNK0G, 0x852cBbef2B58bD530DbE985acf5369F58f19b099)
		await expect(AntiBaseProtocolGY6BKnK.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolznDlM8q = await AntiBaseProtocol.new({from: accounts[2]});
		const uintfECCNXm = BigInt("918")
		const address0EeyKD = accounts[2]
		const uintKYNlYKX = BigInt("861")
		const addressBG8BMHg = accounts[3]
		const uintY824780 = BigInt("284")
//		const addressgPG7CHy = await AntiBaseProtocolznDlM8q.burnFrom.call(address0EeyKD, uintfECCNXm, {from: accounts[0]});
//		const boolzSga8kU = await AntiBaseProtocolznDlM8q.approve.call(addressBG8BMHg, uintKYNlYKX, {from: accounts[1]});
//		const uint256UF65Jae = await AntiBaseProtocolznDlM8q.findBurnFee.call(uintY824780, {from: accounts[5]});
//		const addresshutNo6s = await AntiBaseProtocolznDlM8q.owner.call({from: accounts[4]});
//		await AntiBaseProtocolznDlM8q.requestGas.call({from: accounts[2]});

		await expect(AntiBaseProtocolznDlM8q.burnFrom.call(address0EeyKD, uintfECCNXm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolwlZKRNp = await AntiBaseProtocol.new({from: accounts[2]});
		const addressMMVcgMH = accounts[3]
		const uinteXwcNZu = BigInt("613")
		const addressiqyAGd4 = accounts[0]
		const uintDsxikMB = BigInt("80")
		const addressLuBTGqg = "0x0000000000000000000000000000000000000001"
		const uint256pYzimNh = await AntiBaseProtocolwlZKRNp.balanceOf.call(addressMMVcgMH, {from: accounts[0]});
		const boolJx1tkW1 = await AntiBaseProtocolwlZKRNp.approve.call(addressiqyAGd4, uinteXwcNZu, {from: accounts[1]});
		const stringx3YD1ZF = await AntiBaseProtocolwlZKRNp.name.call({from: accounts[1]});
//		const boolrVWaY6r = await AntiBaseProtocolwlZKRNp.decreaseAllowance.call(addressLuBTGqg, uintDsxikMB, {from: accounts[4]});

		assert.equal(boolJx1tkW1, true)
		assert.equal(stringx3YD1ZF, "https://t.me/antibaseprotocol")
		assert.equal(uint256pYzimNh, BigInt("0"))
		await expect(AntiBaseProtocolwlZKRNp.decreaseAllowance.call(addressLuBTGqg, uintDsxikMB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPhkGjrJ = await AntiBaseProtocol.new({from: accounts[1]});
		const uinttYxdxN7 = BigInt("299")
		const addressu94018B = accounts[5]
		const uint256iSez0c = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uinttYxdxN7, {from: accounts[5]});
		const string77JLjj = await AntiBaseProtocolPhkGjrJ.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressRAgMk1X = await AntiBaseProtocolPhkGjrJ._transferOwnership.call(addressu94018B, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(string77JLjj, "https://t.me/antibaseprotocol")
		assert.equal(uint256iSez0c, BigInt("45"))
		await expect(AntiBaseProtocolPhkGjrJ._transferOwnership.call(addressu94018B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRqtPVS = await AntiBaseProtocol.new({from: accounts[4]});
		const uintaZX3cjp = BigInt("1751")
		const addressRvQYpJ = accounts[4]
		const addressghn3Q4A = accounts[3]
		const boolHf0iUwJ = await AntiBaseProtocolRqtPVS.approve.call(addressRvQYpJ, uintaZX3cjp, {from: accounts[4]});
		const stringvHHLxIh = await AntiBaseProtocolRqtPVS.symbol.call({from: accounts[2]});
		const uint256tyWDNlH = await AntiBaseProtocolRqtPVS.balanceOf.call(addressghn3Q4A, {from: accounts[3]});
		const uint256ONeBaSK = await AntiBaseProtocolRqtPVS.totalSupply.call({from: accounts[5]});

		assert.equal(boolHf0iUwJ, true)
		assert.equal(stringvHHLxIh, "ABASE")
		assert.equal(uint256ONeBaSK, BigInt("31250000000000000000"))
		assert.equal(uint256tyWDNlH, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPhkGjrJ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintDennUNV = BigInt("1763")
		const uintc3sxVi = BigInt("299")
		const uint256nfUTjHv = await AntiBaseProtocolPhkGjrJ.findRewardFee.call(uintDennUNV, {from: accounts[5]});
		const uint256iSez0c = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uintc3sxVi, {from: accounts[5]});

		assert.equal(uint256iSez0c, BigInt("45"))
		assert.equal(uint256nfUTjHv, BigInt("90"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPhkGjrJ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintAZEnx3 = BigInt("299")
		const uintn6ThaYv = BigInt("1310")
		const uintmGU30nr = BigInt("539")
		const addressqghCaEA = accounts[1]
		const addressoEtwH5 = "0x0000000000000000000000000000000000000001"
		const uint256iSez0c = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uintAZEnx3, {from: accounts[5]});
		const string77JLjj = await AntiBaseProtocolPhkGjrJ.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ktUPIAQ = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uintn6ThaYv, {from: accounts[4]});
		const boolWKPPvki = await AntiBaseProtocolPhkGjrJ.isOwner.call({from: accounts[3]});
//		const boolITbt14 = await AntiBaseProtocolPhkGjrJ.transferFrom.call(addressoEtwH5, addressqghCaEA, uintmGU30nr, {from: accounts[4]});

		assert.equal(boolWKPPvki, false)
		assert.equal(string77JLjj, "https://t.me/antibaseprotocol")
		assert.equal(uint256iSez0c, BigInt("45"))
		assert.equal(uint256ktUPIAQ, BigInt("210"))
		await expect(AntiBaseProtocolPhkGjrJ.transferFrom.call(addressoEtwH5, addressqghCaEA, uintmGU30nr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPhkGjrJ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintnujHVfR = BigInt("299")
		const uintLSqbGVt = BigInt("281")
		const addresszegnTnP = accounts[2]
		const uint256iSez0c = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uintnujHVfR, {from: accounts[5]});
		const boolRW21hbA = await AntiBaseProtocolPhkGjrJ.increaseAllowance.call(addresszegnTnP, uintLSqbGVt, {from: accounts[1]});
		const string77JLjj = await AntiBaseProtocolPhkGjrJ.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRW21hbA, true)
		assert.equal(string77JLjj, "https://t.me/antibaseprotocol")
		assert.equal(uint256iSez0c, BigInt("45"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPhkGjrJ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintVFSevlx = BigInt("299")
		const uintoG4LuAV = BigInt("1930")
		const boolaLFYJey = await AntiBaseProtocolPhkGjrJ.isOwner.call({from: accounts[1]});
		const uint256iSez0c = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uintVFSevlx, {from: accounts[5]});
//		const uint256whMB83y = await AntiBaseProtocolPhkGjrJ.burn.call(uintoG4LuAV, {from: accounts[3]});
//		const addressHaxIpxU = await AntiBaseProtocolPhkGjrJ.owner.call({from: accounts[1]});
//		const string77JLjj = await AntiBaseProtocolPhkGjrJ.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolaLFYJey, true)
		assert.equal(uint256iSez0c, BigInt("45"))
		await expect(AntiBaseProtocolPhkGjrJ.burn.call(uintoG4LuAV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMSNDOEb = await AntiBaseProtocol.new({from: accounts[4]});
		const uintycIedd9 = BigInt("1526")
		const addressui1OoH = accounts[5]
		const stringfKGI284 = await AntiBaseProtocolMSNDOEb.symbol.call({from: accounts[2]});
		const uint8ZqknnjQ = await AntiBaseProtocolMSNDOEb.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressQyRHZly = await AntiBaseProtocolMSNDOEb._burn.call(addressui1OoH, uintycIedd9, {from: accounts[1]});

		assert.equal(stringfKGI284, "ABASE")
		assert.equal(uint8ZqknnjQ, BigInt("18"))
		await expect(AntiBaseProtocolMSNDOEb._burn.call(addressui1OoH, uintycIedd9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPhkGjrJ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintCbsb3gb = BigInt("1273")
		const addressaFM6jN = "0x0000000000000000000000000000000000000001"
		const addressfSoNIXC = accounts[1]
		const uintAAkOHz = BigInt("342")
		const addressVrM66IV = accounts[4]
		const addressJYLlEcY = accounts[0]
//		const boolEdt8m5u = await AntiBaseProtocolPhkGjrJ.transferFrom.call(addressfSoNIXC, addressaFM6jN, uintCbsb3gb, {from: accounts[4]});
//		const uint256iSez0c = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uintAAkOHz, {from: accounts[5]});
//		const uint256fgqFt21 = await AntiBaseProtocolPhkGjrJ.allowance.call(addressJYLlEcY, addressVrM66IV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolPhkGjrJ.transferFrom.call(addressfSoNIXC, addressaFM6jN, uintCbsb3gb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPhkGjrJ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintQ98RIaw = BigInt("299")
		const addressa1ZL5l = accounts[5]
		const uint256iSez0c = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uintQ98RIaw, {from: accounts[5]});
		const addressTgwz9zM = await AntiBaseProtocolPhkGjrJ.transferOwnership.call(addressa1ZL5l, {from: accounts[1]});

		assert.equal(uint256iSez0c, BigInt("45"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPhkGjrJ = await AntiBaseProtocol.new({from: accounts[1]});
		const uintYobvrgo = BigInt("0")
		const uint256iSez0c = await AntiBaseProtocolPhkGjrJ.findBurnFee.call(uintYobvrgo, {from: accounts[5]});

		assert.equal(uint256iSez0c, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoldiRp5WE = await AntiBaseProtocol.new({from: accounts[3]});
		const uinty3h4nvf = BigInt("1134")
		const uint256B7sS6yk = await AntiBaseProtocoldiRp5WE.burn.call(uinty3h4nvf, {from: accounts[3]});
//		await AntiBaseProtocoldiRp5WE.renounceOwnership.call({from: accounts[3]});

		await expect(AntiBaseProtocoldiRp5WE.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})