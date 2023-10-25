const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALFP5TkG = await NAL.new({from: accounts[2]});
		const addresspacByR9 = "0x0000000000000000000000000000000000000001"
		const addressizW7BW = accounts[0]
		const uint256vaISPV = await NALFP5TkG.allowance.call(addressizW7BW, addresspacByR9, {from: accounts[5]});
		const uint8P1364JD = await NALFP5TkG.decimals.call({from: accounts[4]});
		const boole8Nq25 = await NALFP5TkG.paused.call({from: accounts[1]});
		await NALFP5TkG.onlyAdmin.call({from: accounts[4]});

		assert.equal(boole8Nq25, false)
		assert.equal(uint256vaISPV, BigInt("0"))
		assert.equal(uint8P1364JD, BigInt("18"))
		await expect(NALFP5TkG.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxqXbrja = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCU5jgIP = BigInt("912")
		const addressxHGmpQF = accounts[0]
		const uinttKa0Qf = BigInt("1838")
		const addressb7xXGbR = accounts[3]
		const addressP6fAG7 = accounts[4]
		const uint0bI16K = BigInt("1655")
		const addressMjX3EdQ = accounts[2]
		const uintSyFkiLv = BigInt("460")
		const addressLPGyGlg = accounts[3]
		const addressTyOAvD5 = "0x0000000000000000000000000000000000000001"
		const addresspkHJSn1 = await NALxqXbrja.burnFrom.call(addressxHGmpQF, uintCU5jgIP, {from: accounts[1]});
		const boolIwSN8Xo = await NALxqXbrja.transferFrom.call(addressP6fAG7, addressb7xXGbR, uinttKa0Qf, {from: accounts[0]});
		const booly34vmUc = await NALxqXbrja.increaseAllowance.call(addressMjX3EdQ, uint0bI16K, {from: accounts[4]});
		const boolKAjQxuY = await NALxqXbrja.transferFrom.call(addressTyOAvD5, addressLPGyGlg, uintSyFkiLv, {from: accounts[5]});
	});

	it('test for NAL', async () => {
		const stringtZGKXFV = "1xCBwFRUbFd8b2NGxNtSlkUS"
		const stringFYUHI7 = "LFTwfzQARLRh32lpgfjddOv46lhCPMkQzFksD5pT7rqP5gXdfTRIotwakwlKXU"
		const uintlD5RKx9 = BigInt("45")
		const NALy3JaOCh = await NAL.new(stringtZGKXFV, stringFYUHI7, uintlD5RKx9, {from: accounts[4]});
		const uintwkV6oi = BigInt("1264")
		const addressEU14AY2 = accounts[4]
		const uintv7SwDRn = BigInt("440")
		const uintdorXRbC = BigInt("974")
		const addresswNeGg5h = accounts[4]
		const uintqknyil5 = BigInt("1656")
		const addressUpDuwOe = accounts[5]
		const addressfrCLAl = accounts[4]
		const uintjJ3XAyD = BigInt("1540")
		const addressdw3MPQc = accounts[5]
		const stringQ6V3Rjl = await NALy3JaOCh.symbol.call({from: accounts[4]});
		const boolLZ90SFC = await NALy3JaOCh.unlock.call(addressEU14AY2, uintwkV6oi, {from: accounts[5]});
		const boolUwQL8ki = await NALy3JaOCh.transferWithLock.call(addresswNeGg5h, uintdorXRbC, uintv7SwDRn, {from: accounts[3]});
		const boolUGfOMth = await NALy3JaOCh.transferFrom.call(addressfrCLAl, addressUpDuwOe, uintqknyil5, {from: accounts[0]});
		const boolPd2Oy4T = await NALy3JaOCh.decreaseAllowance.call(addressdw3MPQc, uintjJ3XAyD, {from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALVweX4TU = await NAL.new({from: accounts[0]});
		const addressGpjbi7N = accounts[1]
		const addressyw9qvYS = accounts[3]
		const addresseEAl5aB = accounts[5]
		await NALVweX4TU.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256LxdlmuY = await NALVweX4TU.balanceOf.call(addressGpjbi7N, {from: accounts[0]});
		const addressQI2KhGB = await NALVweX4TU.notFrozen.call(addressyw9qvYS, {from: accounts[0]});
		const boolYrfemgx = await NALVweX4TU.isAdmin.call(addresseEAl5aB, {from: accounts[3]});

		await expect(NALVweX4TU.unpause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintSZe3Rtg = BigInt("1429")
		const uintYTAS8qN = BigInt("1442")
		const addressrMaHJQt = accounts[5]
		const addressnu61RyG = accounts[3]
		const uintFrwDHo9 = BigInt("1687")
		const addressJSeGaYj = accounts[4]
		const uint256zXa5ON7 = await NALUzVwYKE.burn.call(uintSZe3Rtg, {from: accounts[0]});
		const addressEgB7kma = await NALUzVwYKE.burnFrom.call(addressrMaHJQt, uintYTAS8qN, {from: accounts[4]});
		const address4bu4xm = await NALUzVwYKE.transferOwnership.call(addressnu61RyG, {from: accounts[2]});
		await NALUzVwYKE.onlyAdmin.call({from: accounts[5]});
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressJSeGaYj, uintFrwDHo9, {from: accounts[3]});

		await expect(NALUzVwYKE.burn.call(uintSZe3Rtg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYkitHQA = await NAL.new({from: accounts[3]});
		const uintmSreJX3 = BigInt("1024")
		const addressBt5Oat8 = accounts[4]
		const uintt9sD4c3 = BigInt("1283")
		const addresskfvtSr3 = accounts[1]
		const uintesb1xY3 = BigInt("1534")
		const uintVeC7w5D = BigInt("1996")
		const addressD3KSpV = accounts[2]
		const uintR9wC7ie = BigInt("819")
		const addresseX1I6hP = accounts[3]
		const uintGlsL0t9 = BigInt("403")
		const addressBjMCXjB = "0x0000000000000000000000000000000000000001"
		const boollxWgFMR = await NALYkitHQA.decreaseAllowance.call(addressBt5Oat8, uintmSreJX3, {from: accounts[0]});
		const boolYgJpeiK = await NALYkitHQA.approve.call(addresskfvtSr3, uintt9sD4c3, {from: accounts[3]});
		const booluojUIbg = await NALYkitHQA.transferWithLock.call(addressD3KSpV, uintVeC7w5D, uintesb1xY3, {from: accounts[4]});
		const uint8FzIhiJH = await NALYkitHQA.decimals.call({from: accounts[4]});
		const bool9mtGoB = await NALYkitHQA.transfer.call(addresseX1I6hP, uintR9wC7ie, {from: accounts[2]});
		const boolKhoPOyx = await NALYkitHQA.approve.call(addressBjMCXjB, uintGlsL0t9, {from: accounts[1]});

		await expect(NALYkitHQA.decreaseAllowance.call(addressBt5Oat8, uintmSreJX3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintFtaJ0Up = BigInt("1687")
		const addresshAWaLJ = accounts[4]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addresshAWaLJ, uintFtaJ0Up, {from: accounts[3]});

		assert.equal(boolpy5an6g, true)
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintAzIFzYH = BigInt("1641")
		const addressnjjdqkT = accounts[4]
		const addressGBkh9d3 = accounts[1]
		const addressX4Zgx7x = accounts[3]
		const uintF8a3Pwh = BigInt("321")
		const addressvAyHzgi = accounts[3]
		const uintE2DO0rL = BigInt("1687")
		const addressGOuqunD = accounts[5]
		const boolqqck3M1 = await NALUzVwYKE.transferFrom.call(addressGBkh9d3, addressnjjdqkT, uintAzIFzYH, {from: accounts[5]});
		const address4bu4xm = await NALUzVwYKE.transferOwnership.call(addressX4Zgx7x, {from: accounts[2]});
		await NALUzVwYKE.whenPaused.call({from: accounts[3]});
		const booldGUUEbn = await NALUzVwYKE.unlock.call(addressvAyHzgi, uintF8a3Pwh, {from: accounts[4]});
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressGOuqunD, uintE2DO0rL, {from: accounts[3]});

		await expect(NALUzVwYKE.transferFrom.call(addressGBkh9d3, addressnjjdqkT, uintAzIFzYH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintV9EKjdt = BigInt("1507")
		const addressko7jha = accounts[0]
		const addresseDmmr6r = accounts[1]
		const uintriUXwXP = BigInt("128")
		const addressew8ZJ2t = accounts[4]
		const uintrEdJVAo = BigInt("1687")
		const addressqJXPn63 = accounts[4]
		const stringEqQ2sBw = await NALUzVwYKE.symbol.call({from: accounts[1]});
		const boolgOwLWjX = await NALUzVwYKE.transferFrom.call(addresseDmmr6r, addressko7jha, uintV9EKjdt, {from: accounts[3]});
		const boolCnnDxCW = await NALUzVwYKE.transfer.call(addressew8ZJ2t, uintriUXwXP, {from: accounts[0]});
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressqJXPn63, uintrEdJVAo, {from: accounts[3]});

		assert.equal(stringEqQ2sBw, "NAL")
		await expect(NALUzVwYKE.transferFrom.call(addresseDmmr6r, addressko7jha, uintV9EKjdt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintERj6kN = BigInt("1687")
		const addressTq7hRP7 = accounts[5]
		const uintgNDaCfR = BigInt("1812")
		const addressvkGQz6c = accounts[0]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressTq7hRP7, uintERj6kN, {from: accounts[3]});
		const boolEggcpWH = await NALUzVwYKE.increaseAllowance.call(addressvkGQz6c, uintgNDaCfR, {from: accounts[0]});

		assert.equal(boolEggcpWH, true)
		assert.equal(boolpy5an6g, true)
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintx4mNV4 = BigInt("1687")
		const addressGvfEiEp = accounts[5]
		const uintuuG4tdW = BigInt("1383")
		const uint7ka81u = BigInt("1447")
		const addressML0bLJb = accounts[3]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressGvfEiEp, uintx4mNV4, {from: accounts[3]});
		const boolOC6EbTe = await NALUzVwYKE.lock.call(addressML0bLJb, uint7ka81u, uintuuG4tdW, {from: accounts[3]});
		const booloz5jfu = await NALUzVwYKE.paused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOC6EbTe, true)
		assert.equal(booloz5jfu, false)
		assert.equal(boolpy5an6g, true)
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintQZp8KJO = BigInt("1687")
		const addressSDRkBxh = accounts[5]
		const uintROJsk7b = BigInt("248")
		const addressybG78s8 = accounts[3]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressSDRkBxh, uintQZp8KJO, {from: accounts[3]});
		const addressmo8eCXq = await NALUzVwYKE.burnFrom.call(addressybG78s8, uintROJsk7b, {from: accounts[3]});

		assert.equal(boolpy5an6g, true)
		await expect(NALUzVwYKE.burnFrom.call(addressybG78s8, uintROJsk7b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintSsRPZeX = BigInt("1687")
		const addresscIhZ0tH = accounts[5]
		const stringtq8Kdun = await NALUzVwYKE.name.call({from: accounts[3]});
		const stringEqQ2sBw = await NALUzVwYKE.symbol.call({from: accounts[1]});
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addresscIhZ0tH, uintSsRPZeX, {from: accounts[3]});

		assert.equal(boolpy5an6g, true)
		assert.equal(stringEqQ2sBw, "NAL")
		assert.equal(stringtq8Kdun, "Personal Token")
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintn6WvTyS = BigInt("1727")
		const addresscMn0Nuk = accounts[4]
		const addressAJbWxgU = "0x0000000000000000000000000000000000000001"
		const uintXovdSCd = BigInt("1677")
		const addresszP2gzT = accounts[1]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addresscMn0Nuk, uintn6WvTyS, {from: accounts[3]});
		const addressQmTS2B0 = await NALUzVwYKE.removeAdmin.call(addressAJbWxgU, {from: accounts[3]});
		const boolKUw6f2w = await NALUzVwYKE.transfer.call(addresszP2gzT, uintXovdSCd, {from: accounts[3]});

		assert.equal(boolpy5an6g, true)
		await expect(NALUzVwYKE.removeAdmin.call(addressAJbWxgU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintxX2JgOw = BigInt("1700")
		const addressDwqTa5p = accounts[4]
		const address9bsynO = accounts[3]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressDwqTa5p, uintxX2JgOw, {from: accounts[3]});
		const addressywyZaLE = await NALUzVwYKE.transferOwnership.call(address9bsynO, {from: accounts[3]});

		assert.equal(boolpy5an6g, true)
	});

	it('test for NAL', async () => {
		const NALUKq0QO7 = await NAL.new({from: accounts[2]});
		const uintKTp9acj = BigInt("1651")
		const uintAXOiAc = BigInt("1422")
		const addressAqGAPWn = accounts[2]
		await NALUKq0QO7.pause.call({from: accounts[2]});
		const boolvYSNow4 = await NALUKq0QO7.lock.call(addressAqGAPWn, uintAXOiAc, uintKTp9acj, {from: accounts[4]});

		await expect(NALUKq0QO7.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintYeRlf0J = BigInt("387")
		const addressZWNgG6X = accounts[4]
		const uintMCBIkU1 = BigInt("1687")
		const addressjLBNRYj = accounts[5]
		const uintOJZ3k2R = BigInt("1321")
		const addressEYLYqSJ = accounts[1]
		const uint8BIyPwn = await NALUzVwYKE.decimals.call({from: accounts[3]});
		const boolxNuimOv = await NALUzVwYKE.approve.call(addressZWNgG6X, uintYeRlf0J, {from: accounts[5]});
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressjLBNRYj, uintMCBIkU1, {from: accounts[3]});
		const boolSM5Y5qu = await NALUzVwYKE.unlock.call(addressEYLYqSJ, uintOJZ3k2R, {from: accounts[3]});

		assert.equal(boolpy5an6g, true)
		assert.equal(boolxNuimOv, true)
		assert.equal(uint8BIyPwn, BigInt("18"))
		await expect(NALUzVwYKE.unlock.call(addressEYLYqSJ, uintOJZ3k2R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintjwxAqBC = BigInt("1687")
		const addresstK3HV0p = accounts[5]
		const addressXo5QTb = accounts[4]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addresstK3HV0p, uintjwxAqBC, {from: accounts[3]});
		const boolJACiyBL = await NALUzVwYKE.freezeAccount.call(addressXo5QTb, {from: accounts[3]});
		const uint256gNvu8l = await NALUzVwYKE.totalSupply.call({from: accounts[1]});

		assert.equal(boolJACiyBL, true)
		assert.equal(boolpy5an6g, true)
		assert.equal(uint256gNvu8l, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintaQYvOCB = BigInt("2036")
		const addressnQVdmiQ = accounts[3]
		const addressPQeIcpx = accounts[4]
		const uintdHPAGCQ = BigInt("1507")
		const addressCmeAUeF = accounts[1]
		const addresso9DZtpb = accounts[1]
		const boolyaMcvwb = await NALUzVwYKE.increaseAllowance.call(addressnQVdmiQ, uintaQYvOCB, {from: accounts[4]});
		await NALUzVwYKE.renounceAdmin.call({from: accounts[1]});
		const boolvJVceX2 = await NALUzVwYKE.isAdmin.call(addressPQeIcpx, {from: accounts[2]});
		const boolgOwLWjX = await NALUzVwYKE.transferFrom.call(addresso9DZtpb, addressCmeAUeF, uintdHPAGCQ, {from: accounts[3]});

		assert.equal(boolyaMcvwb, true)
		await expect(NALUzVwYKE.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const addressX6tcxW9 = accounts[3]
		const uintVt6fJxn = BigInt("1212")
		const addressQZlYwKG = accounts[1]
		const uintn4NipCX = BigInt("1337")
		const uint48ImLU = BigInt("1825")
		const addresshlVwy7P = accounts[2]
		const uintkMcLcSd = BigInt("1687")
		const addresso4Y1u7t = accounts[5]
		const uinttjf4xDG = BigInt("1570")
		const addressfRNN9co = accounts[0]
		const uint256huagbYy = await NALUzVwYKE.balanceOf.call(addressX6tcxW9, {from: accounts[1]});
		const addressQpFAvxj = await NALUzVwYKE.burnFrom.call(addressQZlYwKG, uintVt6fJxn, {from: accounts[2]});
		const boolRQI6n7f = await NALUzVwYKE.transferWithLock.call(addresshlVwy7P, uint48ImLU, uintn4NipCX, {from: accounts[4]});
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addresso4Y1u7t, uintkMcLcSd, {from: accounts[3]});
		const boolxcKbhT1 = await NALUzVwYKE.approve.call(addressfRNN9co, uinttjf4xDG, {from: accounts[5]});

		assert.equal(uint256huagbYy, BigInt("2000000000000000000000000000"))
		await expect(NALUzVwYKE.burnFrom.call(addressQZlYwKG, uintVt6fJxn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintI2yhOLY = BigInt("1687")
		const addressh9MsDJP = accounts[6]
		const address2kVbHZ = accounts[3]
		const addresscnGVuj = accounts[0]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressh9MsDJP, uintI2yhOLY, {from: accounts[3]});
		const uint256WqZkhJd = await NALUzVwYKE.balanceOf.call(address2kVbHZ, {from: accounts[4]});
		const addressz9QuyLd = await NALUzVwYKE.upgradeTo.call(addresscnGVuj, {from: accounts[3]});
		await NALUzVwYKE.renounceAdmin.call({from: accounts[3]});

		assert.equal(boolpy5an6g, true)
		assert.equal(uint256WqZkhJd, BigInt("2000000000000000000000000000"))
		await expect(NALUzVwYKE.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintUSul2y3 = BigInt("1281")
		const uintiaxTtCm = BigInt("492")
		const addressXyxlayD = accounts[4]
		const uintSitmHAv = BigInt("1507")
		const addressyyDxHX = accounts[1]
		const addressOPhxpxa = accounts[2]
		const boolQMSpTY = await NALUzVwYKE.lock.call(addressXyxlayD, uintiaxTtCm, uintUSul2y3, {from: accounts[3]});
		await NALUzVwYKE.renounceAdmin.call({from: accounts[4]});
		const boolgOwLWjX = await NALUzVwYKE.transferFrom.call(addressOPhxpxa, addressyyDxHX, uintSitmHAv, {from: accounts[3]});

		await expect(NALUzVwYKE.lock.call(addressXyxlayD, uintiaxTtCm, uintUSul2y3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const addressSTcWVrF = accounts[2]
		const uintP8F7hX = BigInt("1687")
		const addressbKaVy4E = accounts[6]
		const boolyNvNyc4 = await NALUzVwYKE.unfreezeAccount.call(addressSTcWVrF, {from: accounts[3]});
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addressbKaVy4E, uintP8F7hX, {from: accounts[3]});

		await expect(NALUzVwYKE.unfreezeAccount.call(addressSTcWVrF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALUzVwYKE = await NAL.new({from: accounts[3]});
		const uintdeHwkDk = BigInt("1859")
		const addresscp3n1tf = accounts[5]
		const uintuecw1mn = BigInt("71")
		const uinttFbzgux = BigInt("119")
		const address5zCPbt = accounts[3]
		const uintkWFxUm = BigInt("1580")
		const addressWKvzeMj = accounts[4]
		const boolpy5an6g = await NALUzVwYKE.transfer.call(addresscp3n1tf, uintdeHwkDk, {from: accounts[3]});
		const boolY8E5byZ = await NALUzVwYKE.transferWithLock.call(address5zCPbt, uinttFbzgux, uintuecw1mn, {from: accounts[3]});
		const boolTRvQNw5 = await NALUzVwYKE.unlock.call(addressWKvzeMj, uintkWFxUm, {from: accounts[0]});

		assert.equal(boolY8E5byZ, true)
		assert.equal(boolpy5an6g, true)
		await expect(NALUzVwYKE.unlock.call(addressWKvzeMj, uintkWFxUm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})