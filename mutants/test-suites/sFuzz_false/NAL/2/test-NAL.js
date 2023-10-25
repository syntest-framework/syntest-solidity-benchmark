const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringzBHTuFh = "n5LwbijJEgUWv086dLdBneuXofD38gxt9FCHI3eLVTh5SBltqXEcQIF0BKTc2Bvg1I3"
		const stringodVo2Uj = "WwCYG3PLBaf829mCQCOu6mwMMkaimYQMfBkkBsD1aIEXvEsmoCVLm"
		const uintiN0N5E = BigInt("19")
		const NALGEKave1 = await NAL.new(stringzBHTuFh, stringodVo2Uj, uintiN0N5E, {from: accounts[0]});
		const uintVilDvHg = BigInt("271")
		const addressJr2sRYV = accounts[0]
		const addressg7rSs8B = accounts[0]
		const boolTUyJdGw = await NALGEKave1.transfer.call(addressJr2sRYV, uintVilDvHg, {from: accounts[1]});
		const addressP0xwBMO = await NALGEKave1.notFrozen.call(addressg7rSs8B, {from: accounts[4]});
		const uint8PRNOPC = await NALGEKave1.decimals.call({from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALH1CYNW2 = await NAL.new({from: accounts[5]});
		const uintuH2BQX3 = BigInt("35")
		const addressdlkJi6l = "0x0000000000000000000000000000000000000001"
		const uintLQTjU9s = BigInt("1088")
		const uintBwgVh5T = BigInt("1432")
		const addressMJxBOqH = accounts[4]
		const boolwgO412J = await NALH1CYNW2.paused.call({from: accounts[5]});
//		const boolzZD5VRW = await NALH1CYNW2.transfer.call(addressdlkJi6l, uintuH2BQX3, {from: "0x0000000000000000000000000000000000000001"});
//		const stringlkxBaZ = await NALH1CYNW2.symbol.call({from: accounts[4]});
//		const boolvld3jHG = await NALH1CYNW2.lock.call(addressMJxBOqH, uintBwgVh5T, uintLQTjU9s, {from: accounts[2]});
//		const uint256wE7zzb = await NALH1CYNW2.totalSupply.call({from: accounts[4]});

		assert.equal(boolwgO412J, false)
		await expect(NALH1CYNW2.transfer.call(addressdlkJi6l, uintuH2BQX3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALi8HHdP = await NAL.new({from: accounts[5]});
		const uintFDUX38B = BigInt("964")
		const addressUGG9Woh = accounts[1]
		const addressqjxrR8j = accounts[4]
		const uintKzQUirp = BigInt("196")
		const addressJVwK9mg = accounts[3]
		const addressFtGjioE = "0x0000000000000000000000000000000000000001"
		const addressdlQCkOA = accounts[0]
		const uintMTGxFPo = BigInt("587")
		const addressbvsZPi = accounts[2]
		const addresstZbd87x = accounts[4]
//		const boolVA47Jd2 = await NALi8HHdP.transferFrom.call(addressqjxrR8j, addressUGG9Woh, uintFDUX38B, {from: accounts[1]});
//		const boollr3v1n8 = await NALi8HHdP.transferFrom.call(addressFtGjioE, addressJVwK9mg, uintKzQUirp, {from: accounts[3]});
//		const boolke30nic = await NALi8HHdP.unfreezeAccount.call(addressdlQCkOA, {from: accounts[0]});
//		const boolVxa757t = await NALi8HHdP.transferFrom.call(addresstZbd87x, addressbvsZPi, uintMTGxFPo, {from: accounts[0]});

		await expect(NALi8HHdP.transferFrom.call(addressqjxrR8j, addressUGG9Woh, uintFDUX38B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALF5253N0 = await NAL.new({from: accounts[3]});
		const uintiiQl71y = BigInt("1952")
		const addressVQMTM9J = accounts[2]
		const uinttRKxVhF = BigInt("461")
		const uintZAUzize = BigInt("1185")
		const addressb4tMZ8M = accounts[1]
		const addressZQzioLe = accounts[2]
		const boolimmA9YW = await NALF5253N0.increaseAllowance.call(addressVQMTM9J, uintiiQl71y, {from: accounts[5]});
//		const boolnMDfdO7 = await NALF5253N0.transferWithLock.call(addressb4tMZ8M, uintZAUzize, uinttRKxVhF, {from: accounts[4]});
//		await NALF5253N0.pause.call({from: accounts[2]});
//		const stringkX5FNi8 = await NALF5253N0.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolmPWWBge = await NALF5253N0.freezeAccount.call(addressZQzioLe, {from: accounts[0]});

		assert.equal(boolimmA9YW, true)
		await expect(NALF5253N0.transferWithLock.call(addressb4tMZ8M, uintZAUzize, uinttRKxVhF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALGHAaKdh = await NAL.new({from: accounts[3]});
		const addressocU0A6y = accounts[0]
//		await NALGHAaKdh.renounceAdmin.call({from: accounts[4]});
//		const addressVfW3C7T = await NALGHAaKdh.notFrozen.call(addressocU0A6y, {from: accounts[3]});
//		await NALGHAaKdh.whenPaused.call({from: accounts[4]});
//		const uint8Sk7u0f5 = await NALGHAaKdh.decimals.call({from: accounts[4]});

		await expect(NALGHAaKdh.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALH1CYNW2 = await NAL.new({from: accounts[5]});
		const uintB4YhoG = BigInt("1088")
		const uinthRJzW1P = BigInt("1432")
		const addressKDvUmko = accounts[5]
		const stringlkxBaZ = await NALH1CYNW2.symbol.call({from: accounts[4]});
//		const boolvld3jHG = await NALH1CYNW2.lock.call(addressKDvUmko, uinthRJzW1P, uintB4YhoG, {from: accounts[2]});
//		const uint256wE7zzb = await NALH1CYNW2.totalSupply.call({from: accounts[4]});

		assert.equal(stringlkxBaZ, "NAL")
		await expect(NALH1CYNW2.lock.call(addressKDvUmko, uinthRJzW1P, uintB4YhoG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALH1CYNW2 = await NAL.new({from: accounts[5]});
		const stringlkxBaZ = await NALH1CYNW2.symbol.call({from: accounts[4]});
		const uint256wE7zzb = await NALH1CYNW2.totalSupply.call({from: accounts[4]});

		assert.equal(stringlkxBaZ, "NAL")
		assert.equal(uint256wE7zzb, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALi8HHdP = await NAL.new({from: accounts[5]});
		const uintrZ2k9aO = BigInt("964")
		const addressaodwFv9 = accounts[1]
		const addresssx4mgLl = accounts[4]
		const uintyDfZKLH = BigInt("196")
		const addressMaGxliA = accounts[3]
		const addressBbCIci8 = "0x0000000000000000000000000000000000000001"
		const uintZGtdgdL = BigInt("587")
		const addressQflfq8B = accounts[2]
		const addressB3evhbf = accounts[4]
//		await NALi8HHdP.onlyOwner.call({from: accounts[0]});
//		const boolVA47Jd2 = await NALi8HHdP.transferFrom.call(addresssx4mgLl, addressaodwFv9, uintrZ2k9aO, {from: accounts[1]});
//		const boollr3v1n8 = await NALi8HHdP.transferFrom.call(addressBbCIci8, addressMaGxliA, uintyDfZKLH, {from: accounts[3]});
//		const uint256bucKW0X = await NALi8HHdP.totalSupply.call({from: accounts[2]});
//		const boolVxa757t = await NALi8HHdP.transferFrom.call(addressB3evhbf, addressQflfq8B, uintZGtdgdL, {from: accounts[0]});

		await expect(NALi8HHdP.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL69f2pj = await NAL.new({from: accounts[4]});
		const addressBPeLye7 = accounts[1]
		const addressmbYZkiM = accounts[3]
		const addressPc61OtJ = accounts[0]
		const uintRS7sQdq = BigInt("1657")
		const addressC8BKpkp = "0x0000000000000000000000000000000000000001"
		const uintexKXpO = BigInt("408")
		const addressrMRiROb = accounts[0]
		const addressdvBzafk = accounts[0]
		const uinthbNoQzv = BigInt("1442")
		const addressmlQHmXk = accounts[3]
		const uint256fmhMxAP = await NAL69f2pj.allowance.call(addressmbYZkiM, addressBPeLye7, {from: accounts[3]});
//		const addresswRiTzAZ = await NAL69f2pj.removeAdmin.call(addressPc61OtJ, {from: accounts[1]});
//		const addressVDgcdfJ = await NAL69f2pj.burnFrom.call(addressC8BKpkp, uintRS7sQdq, {from: accounts[1]});
//		const boolNYbFM2y = await NAL69f2pj.transferFrom.call(addressdvBzafk, addressrMRiROb, uintexKXpO, {from: accounts[4]});
//		const boollgScjoy = await NAL69f2pj.increaseAllowance.call(addressmlQHmXk, uinthbNoQzv, {from: accounts[2]});

		assert.equal(uint256fmhMxAP, BigInt("0"))
		await expect(NAL69f2pj.removeAdmin.call(addressPc61OtJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALi8HHdP = await NAL.new({from: accounts[5]});
		const uintKIi31MG = BigInt("579")
		const addressPoqwqKj = accounts[5]
		const uintL3RjPvN = BigInt("1003")
		const addressbThMEwZ = accounts[1]
		const addressWcx499q = accounts[4]
		const uinttXDvRKX = BigInt("587")
		const addressjTbdxB = accounts[2]
		const addressQxebxT8 = accounts[4]
		const uinte4lumM2 = BigInt("256")
		const addressQTY1pUx = accounts[1]
//		const addressuDNqOud = await NALi8HHdP.burnFrom.call(addressPoqwqKj, uintKIi31MG, {from: accounts[3]});
//		const boolVA47Jd2 = await NALi8HHdP.transferFrom.call(addressWcx499q, addressbThMEwZ, uintL3RjPvN, {from: accounts[1]});
//		const boolVxa757t = await NALi8HHdP.transferFrom.call(addressQxebxT8, addressjTbdxB, uinttXDvRKX, {from: accounts[0]});
//		const boolBObYTEX = await NALi8HHdP.transfer.call(addressQTY1pUx, uinte4lumM2, {from: accounts[3]});

		await expect(NALi8HHdP.burnFrom.call(addressPoqwqKj, uintKIi31MG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALH1CYNW2 = await NAL.new({from: accounts[5]});
		const uintwcgOJmj = BigInt("1197")
		const uintPmDo8gX = BigInt("832")
		const addressPNzFB1k = accounts[0]
		const uintAmaLyaN = BigInt("35")
		const addressdono0Mf = "0x0000000000000000000000000000000000000001"
//		const boolFpVcwRx = await NALH1CYNW2.lock.call(addressPNzFB1k, uintPmDo8gX, uintwcgOJmj, {from: accounts[5]});
//		const boolzZD5VRW = await NALH1CYNW2.transfer.call(addressdono0Mf, uintAmaLyaN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALH1CYNW2.lock.call(addressPNzFB1k, uintPmDo8gX, uintwcgOJmj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALi8HHdP = await NAL.new({from: accounts[5]});
		const uint9NKNdt = BigInt("1139")
		const addressJ7uEPus = accounts[1]
		const uintqhduZR9 = BigInt("1003")
		const addresskRifVy = accounts[1]
		const addressjVOZp11 = accounts[4]
		const uinte78D2N = BigInt("587")
		const address9k0aO8 = accounts[2]
		const addressxkBwYyT = accounts[4]
		const booluatvAHA = await NALi8HHdP.approve.call(addressJ7uEPus, uint9NKNdt, {from: accounts[5]});
//		const boolVA47Jd2 = await NALi8HHdP.transferFrom.call(addressjVOZp11, addresskRifVy, uintqhduZR9, {from: accounts[1]});
//		const boolVxa757t = await NALi8HHdP.transferFrom.call(addressxkBwYyT, address9k0aO8, uinte78D2N, {from: accounts[0]});

		assert.equal(booluatvAHA, true)
		await expect(NALi8HHdP.transferFrom.call(addressjVOZp11, addresskRifVy, uintqhduZR9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALH1CYNW2 = await NAL.new({from: accounts[5]});
		const addressX1wl4w = accounts[0]
		const uintDF6cswT = BigInt("35")
		const addressN31kor = "0x0000000000000000000000000000000000000001"
		const uint256hZBMmK = await NALH1CYNW2.totalSupply.call({from: accounts[2]});
		const uint256xjAB51V = await NALH1CYNW2.balanceOf.call(addressX1wl4w, {from: accounts[1]});
//		const boolzZD5VRW = await NALH1CYNW2.transfer.call(addressN31kor, uintDF6cswT, {from: "0x0000000000000000000000000000000000000001"});
//		await NALH1CYNW2.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256hZBMmK, BigInt("2000000000000000000000000000"))
		assert.equal(uint256xjAB51V, BigInt("0"))
		await expect(NALH1CYNW2.transfer.call(addressN31kor, uintDF6cswT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALH1CYNW2 = await NAL.new({from: accounts[5]});
		const uintsHWjCsm = BigInt("236")
		const addressbiwN8Q = accounts[3]
		const uintRsLsrj0 = BigInt("35")
		const address3AKs3G = "0x0000000000000000000000000000000000000000"
		const stringCylK9a5 = await NALH1CYNW2.name.call({from: accounts[4]});
//		const booltweuu8 = await NALH1CYNW2.decreaseAllowance.call(addressbiwN8Q, uintsHWjCsm, {from: accounts[0]});
//		await NALH1CYNW2.unpause.call({from: accounts[2]});
//		const boolzZD5VRW = await NALH1CYNW2.transfer.call(address3AKs3G, uintRsLsrj0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringCylK9a5, "Personal Token")
		await expect(NALH1CYNW2.decreaseAllowance.call(addressbiwN8Q, uintsHWjCsm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALi8HHdP = await NAL.new({from: accounts[5]});
		const uintkIR3fXf = BigInt("1812")
		const addressNnYZOyF = accounts[2]
		const addresslpazb7f = accounts[3]
		const uinteOEtYI = BigInt("587")
		const addressp9jMeD0 = accounts[3]
		const addresstOraQEZ = accounts[4]
		const addressOUSvzb5 = accounts[2]
		const uint8xy0PbBO = await NALi8HHdP.decimals.call({from: accounts[1]});
		const booldwHUwrY = await NALi8HHdP.increaseAllowance.call(addressNnYZOyF, uintkIR3fXf, {from: accounts[2]});
//		const addresseiYTx2 = await NALi8HHdP.removeAdmin.call(addresslpazb7f, {from: accounts[5]});
//		const boolVxa757t = await NALi8HHdP.transferFrom.call(addresstOraQEZ, addressp9jMeD0, uinteOEtYI, {from: accounts[0]});
//		const boolupjHSvm = await NALi8HHdP.isAdmin.call(addressOUSvzb5, {from: accounts[4]});

		assert.equal(booldwHUwrY, true)
		assert.equal(uint8xy0PbBO, BigInt("18"))
		await expect(NALi8HHdP.removeAdmin.call(addresslpazb7f, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALH1CYNW2 = await NAL.new({from: accounts[5]});
		const uintEWMCxig = BigInt("1061")
		const addressVrKbxf1 = accounts[0]
		const uintG5CJftK = BigInt("35")
		const addressbLorncw = "0x0000000000000000000000000000000000000002"
//		const booljFW9XL2 = await NALH1CYNW2.unlock.call(addressVrKbxf1, uintEWMCxig, {from: accounts[5]});
//		await NALH1CYNW2.onlyAdmin.call({from: accounts[5]});
//		const boolzZD5VRW = await NALH1CYNW2.transfer.call(addressbLorncw, uintG5CJftK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALH1CYNW2.unlock.call(addressVrKbxf1, uintEWMCxig, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALk83l4q5 = await NAL.new({from: accounts[1]});
		const addressKgGkpH = accounts[2]
		const addresschZkBPj = accounts[3]
		const addresswRaaOTl = accounts[0]
		const uintnKkY30b = BigInt("889")
		const addressd67ufSJ = accounts[4]
		const uintrsBQvkr = BigInt("1382")
		const addressuhyIIxc = accounts[5]
		const uintInMmEMc = BigInt("2033")
		const addresshVfYZ8V = accounts[3]
		const addressRrbGBGe = "0x0000000000000000000000000000000000000001"
		const uint256mYkVRd9 = await NALk83l4q5.allowance.call(addresschZkBPj, addressKgGkpH, {from: accounts[2]});
		const addresskhxIC3v = await NALk83l4q5.transferOwnership.call(addresswRaaOTl, {from: accounts[1]});
//		const addressWi6TAHz = await NALk83l4q5.burnFrom.call(addressd67ufSJ, uintnKkY30b, {from: accounts[3]});
//		const boolRHT6Nov = await NALk83l4q5.transfer.call(addressuhyIIxc, uintrsBQvkr, {from: accounts[4]});
//		const boolPlFdaZZ = await NALk83l4q5.transferFrom.call(addressRrbGBGe, addresshVfYZ8V, uintInMmEMc, {from: accounts[3]});

		assert.equal(uint256mYkVRd9, BigInt("0"))
		await expect(NALk83l4q5.burnFrom.call(addressd67ufSJ, uintnKkY30b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALi8HHdP = await NAL.new({from: accounts[5]});
		const addressGcRNv6 = "0x0000000000000000000000000000000000000001"
		const uintrCPbnO = BigInt("587")
		const addressMMwbcMh = accounts[2]
		const addressnpqnrNy = accounts[4]
		const addressPeIkerz = await NALi8HHdP.upgradeTo.call(addressGcRNv6, {from: accounts[5]});
//		await NALi8HHdP.onlyAdmin.call({from: accounts[3]});
//		const boolVxa757t = await NALi8HHdP.transferFrom.call(addressnpqnrNy, addressMMwbcMh, uintrCPbnO, {from: accounts[0]});

		await expect(NALi8HHdP.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALi8HHdP = await NAL.new({from: accounts[5]});
		const addressWdNThuh = accounts[1]
		const uintuYELAao = BigInt("587")
		const addressxnpYLuc = accounts[4]
		const addressBfUQsz = accounts[4]
		const addressLhRGqmA = await NALi8HHdP.addAdmin.call(addressWdNThuh, {from: accounts[5]});
//		const boolVxa757t = await NALi8HHdP.transferFrom.call(addressBfUQsz, addressxnpYLuc, uintuYELAao, {from: accounts[0]});

		await expect(NALi8HHdP.transferFrom.call(addressBfUQsz, addressxnpYLuc, uintuYELAao, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})