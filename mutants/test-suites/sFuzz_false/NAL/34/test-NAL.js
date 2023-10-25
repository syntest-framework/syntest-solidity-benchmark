const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALZSxZALU = await NAL.new({from: accounts[3]});
		const uintIYDm23 = BigInt("863")
		const addressdxASk6N = accounts[0]
		const boolG1bV2iN = await NALZSxZALU.paused.call({from: accounts[2]});
		const booljIOqdCN = await NALZSxZALU.increaseAllowance.call(addressdxASk6N, uintIYDm23, {from: accounts[0]});
//		await NALZSxZALU.onlyOwner.call({from: accounts[4]});

		assert.equal(boolG1bV2iN, false)
		assert.equal(booljIOqdCN, true)
		await expect(NALZSxZALU.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALEDwDZGd = await NAL.new({from: accounts[3]});
		const uintjewtgNg = BigInt("314")
		const addressE5nR8lh = accounts[3]
		const addressKYaTLeu = accounts[3]
		const uintFQk4ex = BigInt("1756")
		const addressOvn2uWd = accounts[4]
		const uintH3m3tpB = BigInt("952")
		const address75nqkU = accounts[0]
//		const boolCViN13w = await NALEDwDZGd.transferFrom.call(addressKYaTLeu, addressE5nR8lh, uintjewtgNg, {from: accounts[4]});
//		await NALEDwDZGd.whenPaused.call({from: accounts[3]});
//		const booldd0gtZc = await NALEDwDZGd.decreaseAllowance.call(addressOvn2uWd, uintFQk4ex, {from: "0x0000000000000000000000000000000000000001"});
//		const boolv7gcQFs = await NALEDwDZGd.decreaseAllowance.call(address75nqkU, uintH3m3tpB, {from: accounts[5]});

		await expect(NALEDwDZGd.transferFrom.call(addressKYaTLeu, addressE5nR8lh, uintjewtgNg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringZ0ni9vm = "kxFOhMPddFZUVVYzC3UPBmDKbkina1pvOSW5J7wTmbCcnLT07TdI5KaZIvDn7otTEFr7gaKEvm7J26ULe9q"
		const stringVYQmFe = "dhpGnz9mKAGAHbAfUQAPUDVDjCXTbGRbR3lEDcyOBmunaxpb0coOp84WNy08V3Gfe9OwwuFEHjinFIN6K"
		const uintIzbzJbP = BigInt("92")
		const NALtlIjvy1 = await NAL.new(stringZ0ni9vm, stringVYQmFe, uintIzbzJbP, {from: accounts[2]});
		const uintFb6vlM7 = BigInt("734")
		const addressetnZZO = "0x0000000000000000000000000000000000000001"
		const uintpUMg0Qw = BigInt("1752")
		const addressm6WF9he = accounts[0]
		const boolNSoh3vL = await NALtlIjvy1.increaseAllowance.call(addressetnZZO, uintFb6vlM7, {from: accounts[2]});
		await NALtlIjvy1.onlyAdmin.call({from: accounts[0]});
		const stringvhzNOUX = await NALtlIjvy1.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolshInNGr = await NALtlIjvy1.increaseAllowance.call(addressm6WF9he, uintpUMg0Qw, {from: accounts[3]});
		const stringdk0yHjg = await NALtlIjvy1.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const uintPc3Bxci = BigInt("1219")
		const addressIb4KyiB = accounts[0]
		const address9xz2uP = accounts[2]
		const uintBpP4XRR = BigInt("1958")
		const uintXynG5ir = BigInt("412")
		const addressNmo0RCO = accounts[3]
		const boolipbN3Lr = await NALfhNmhEH.increaseAllowance.call(addressIb4KyiB, uintPc3Bxci, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(address9xz2uP, {from: accounts[3]});
//		const boolZ1rI51t = await NALfhNmhEH.transferWithLock.call(addressNmo0RCO, uintXynG5ir, uintBpP4XRR, {from: accounts[0]});
//		await NALfhNmhEH.pause.call({from: accounts[5]});
//		await NALfhNmhEH.onlyAdmin.call({from: accounts[3]});

		assert.equal(boolipbN3Lr, true)
		assert.equal(uint256TScryOS, BigInt("2000000000000000000000000000"))
		await expect(NALfhNmhEH.transferWithLock.call(addressNmo0RCO, uintXynG5ir, uintBpP4XRR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALBR4r9tT = await NAL.new({from: accounts[1]});
		const uintVjN47kC = BigInt("1569")
		const addressdUA7EaS = accounts[3]
		const uintVCIAY40 = BigInt("859")
		const addressrTdXlfd = accounts[0]
//		const boolsPX5UeK = await NALBR4r9tT.transfer.call(addressdUA7EaS, uintVjN47kC, {from: accounts[0]});
//		await NALBR4r9tT.pause.call({from: accounts[0]});
//		const boolTX20xFr = await NALBR4r9tT.approve.call(addressrTdXlfd, uintVCIAY40, {from: accounts[2]});

		await expect(NALBR4r9tT.transfer.call(addressdUA7EaS, uintVjN47kC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALy1q2pY = await NAL.new({from: accounts[5]});
		const uintNtfUejI = BigInt("1066")
		const addressXDlo1NW = accounts[4]
		const address56iKbH = accounts[1]
		const addressvAbykB = accounts[1]
		const uintjdZf22b = BigInt("836")
		const addressXujl6y1 = accounts[2]
		const boolS7Ea34 = await NALy1q2pY.approve.call(addressXDlo1NW, uintNtfUejI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jYw110s = await NALy1q2pY.allowance.call(addressvAbykB, address56iKbH, {from: accounts[3]});
//		const boolg2fMkBp = await NALy1q2pY.unlock.call(addressXujl6y1, uintjdZf22b, {from: accounts[0]});

		assert.equal(boolS7Ea34, true)
		assert.equal(uint256jYw110s, BigInt("0"))
		await expect(NALy1q2pY.unlock.call(addressXujl6y1, uintjdZf22b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const uintoCrhPQe = BigInt("1219")
		const addressy2ZV7w = accounts[0]
		const uintxXKgc1H = BigInt("163")
		const addressGczzWW = accounts[4]
		const addressPsS6dSU = accounts[3]
		const uintMzLcjJi = BigInt("1958")
		const uintW7j3lTQ = BigInt("412")
		const addressOK4w8WB = accounts[3]
		const boolipbN3Lr = await NALfhNmhEH.increaseAllowance.call(addressy2ZV7w, uintoCrhPQe, {from: "0x0000000000000000000000000000000000000001"});
		const boolOYy68qb = await NALfhNmhEH.increaseAllowance.call(addressGczzWW, uintxXKgc1H, {from: accounts[2]});
		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addressPsS6dSU, {from: accounts[3]});
		const uint256ne1MEYa = await NALfhNmhEH.totalSupply.call({from: accounts[1]});
//		const boolZ1rI51t = await NALfhNmhEH.transferWithLock.call(addressOK4w8WB, uintW7j3lTQ, uintMzLcjJi, {from: accounts[0]});
//		await NALfhNmhEH.pause.call({from: accounts[5]});
//		await NALfhNmhEH.onlyAdmin.call({from: accounts[3]});

		assert.equal(boolOYy68qb, true)
		assert.equal(boolipbN3Lr, true)
		assert.equal(uint256TScryOS, BigInt("0"))
		assert.equal(uint256ne1MEYa, BigInt("2000000000000000000000000000"))
		await expect(NALfhNmhEH.transferWithLock.call(addressOK4w8WB, uintW7j3lTQ, uintMzLcjJi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const uintjljwwtD = BigInt("1219")
		const addresscHcjttk = accounts[0]
		const uintgQZBPB5 = BigInt("404")
		const addresssLH6rvr = accounts[0]
		const addressxTSoHGB = "0x0000000000000000000000000000000000000001"
		const addresszB2gxkZ = accounts[2]
		const uintl0JH3s6 = BigInt("1958")
		const uintJ3qDGj0 = BigInt("412")
		const addressDhB5sbS = accounts[3]
		const boolipbN3Lr = await NALfhNmhEH.increaseAllowance.call(addresscHcjttk, uintjljwwtD, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWfecXW = await NALfhNmhEH.decreaseAllowance.call(addresssLH6rvr, uintgQZBPB5, {from: accounts[1]});
//		await NALfhNmhEH.whenNotPaused.call({from: accounts[3]});
//		const addressP2q4xJl = await NALfhNmhEH.transferOwnership.call(addressxTSoHGB, {from: accounts[0]});
//		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addresszB2gxkZ, {from: accounts[3]});
//		const boolZ1rI51t = await NALfhNmhEH.transferWithLock.call(addressDhB5sbS, uintJ3qDGj0, uintl0JH3s6, {from: accounts[0]});
//		await NALfhNmhEH.pause.call({from: accounts[5]});
//		await NALfhNmhEH.onlyAdmin.call({from: accounts[3]});

		assert.equal(boolipbN3Lr, true)
		await expect(NALfhNmhEH.decreaseAllowance.call(addresssLH6rvr, uintgQZBPB5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const uintvw4OrcO = BigInt("1219")
		const addressj11C6Ur = accounts[0]
		const address95Q2ew = accounts[2]
		const uintSP1a9m7 = BigInt("616")
		const address8FdKZt = accounts[3]
		const uintvZsTs1 = BigInt("1958")
		const uintulU26dE = BigInt("441")
		const addressnebmvFw = accounts[3]
		const boolipbN3Lr = await NALfhNmhEH.increaseAllowance.call(addressj11C6Ur, uintvw4OrcO, {from: "0x0000000000000000000000000000000000000001"});
//		await NALfhNmhEH.renounceAdmin.call({from: accounts[1]});
//		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(address95Q2ew, {from: accounts[3]});
//		await NALfhNmhEH.whenNotPaused.call({from: accounts[5]});
//		const booluShvH7t = await NALfhNmhEH.transfer.call(address8FdKZt, uintSP1a9m7, {from: accounts[4]});
//		const boolZ1rI51t = await NALfhNmhEH.transferWithLock.call(addressnebmvFw, uintulU26dE, uintvZsTs1, {from: accounts[0]});

		assert.equal(boolipbN3Lr, true)
		await expect(NALfhNmhEH.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALEDwDZGd = await NAL.new({from: accounts[3]});
		const addressHMZC6Zb = accounts[0]
		const uintaAfSmep = BigInt("314")
		const addressD4vomli = accounts[3]
		const addressXUnqg8L = accounts[4]
		const stringgijFZOo = await NALEDwDZGd.symbol.call({from: accounts[2]});
//		const addresswJJvkvR = await NALEDwDZGd.notFrozen.call(addressHMZC6Zb, {from: accounts[3]});
//		const boolCViN13w = await NALEDwDZGd.transferFrom.call(addressXUnqg8L, addressD4vomli, uintaAfSmep, {from: accounts[4]});

		assert.equal(stringgijFZOo, "NAL")
		await expect(NALEDwDZGd.notFrozen.call(addressHMZC6Zb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const uintaZToE91 = BigInt("1219")
		const addressT0Nx7GD = accounts[0]
		const addressAgrZvUc = accounts[2]
		const uintCN807Nc = BigInt("1794")
		const uintUkayRQb = BigInt("1958")
		const uintEaHmtt5 = BigInt("412")
		const addressBCJtXkz = accounts[3]
		const boolipbN3Lr = await NALfhNmhEH.increaseAllowance.call(addressT0Nx7GD, uintaZToE91, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addressAgrZvUc, {from: accounts[3]});
//		const uint256ILqapd = await NALfhNmhEH.burn.call(uintCN807Nc, {from: accounts[0]});
//		const boolZ1rI51t = await NALfhNmhEH.transferWithLock.call(addressBCJtXkz, uintEaHmtt5, uintUkayRQb, {from: accounts[0]});

		assert.equal(boolipbN3Lr, true)
		assert.equal(uint256TScryOS, BigInt("2000000000000000000000000000"))
		await expect(NALfhNmhEH.burn.call(uintCN807Nc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZzycwc7 = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addressolWbCV = accounts[3]
		const addressn1b09n = accounts[2]
		const addressRTr5mr4 = await NALZzycwc7.upgradeTo.call(addressolWbCV, {from: accounts[5]});
		const uint256t2wFhhD = await NALZzycwc7.balanceOf.call(addressn1b09n, {from: accounts[5]});
		const uint8EbDF6cs = await NALZzycwc7.decimals.call({from: accounts[1]});
		const boolBnwkB4S = await NALZzycwc7.paused.call({from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALEDwDZGd = await NAL.new({from: accounts[3]});
		const uintLAJ2GqW = BigInt("932")
		const addresswYjy9Tz = accounts[4]
		const uintPpMcNT = BigInt("503")
		const addresst5KuWFn = accounts[4]
		const uintg48XVnY = BigInt("319")
		const addressXMOS9wl = accounts[3]
		const addressp1m7Zzs = accounts[3]
//		const addressoHLd6Uy = await NALEDwDZGd.burnFrom.call(addresswYjy9Tz, uintLAJ2GqW, {from: accounts[1]});
//		const boolEZHExq = await NALEDwDZGd.transfer.call(addresst5KuWFn, uintPpMcNT, {from: accounts[2]});
//		const boolCViN13w = await NALEDwDZGd.transferFrom.call(addressp1m7Zzs, addressXMOS9wl, uintg48XVnY, {from: accounts[4]});

		await expect(NALEDwDZGd.burnFrom.call(addresswYjy9Tz, uintLAJ2GqW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const addressZne0d1c = accounts[2]
		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addressZne0d1c, {from: accounts[3]});
//		await NALfhNmhEH.pause.call({from: accounts[2]});

		assert.equal(uint256TScryOS, BigInt("2000000000000000000000000000"))
		await expect(NALfhNmhEH.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALEDwDZGd = await NAL.new({from: accounts[3]});
		const addressC8tJ6G7 = accounts[3]
		const uintPRnZxVP = BigInt("294")
		const addressuMf1u09 = accounts[3]
		const addressCldqqde = accounts[3]
		const addressX4U7gtn = accounts[0]
		const boolSBxR0mX = await NALEDwDZGd.isOwner.call(addressC8tJ6G7, {from: accounts[2]});
//		const boolCViN13w = await NALEDwDZGd.transferFrom.call(addressCldqqde, addressuMf1u09, uintPRnZxVP, {from: accounts[4]});
//		const addressL9Alo2R = await NALEDwDZGd.transferOwnership.call(addressX4U7gtn, {from: accounts[1]});

		assert.equal(boolSBxR0mX, true)
		await expect(NALEDwDZGd.transferFrom.call(addressCldqqde, addressuMf1u09, uintPRnZxVP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const addressqKT4mf = accounts[2]
		const uintD1k6XuC = BigInt("383")
		const addressuX0vUyX = accounts[3]
		const uint8dbIVMQE = await NALfhNmhEH.decimals.call({from: accounts[0]});
		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addressqKT4mf, {from: accounts[3]});
//		const boolmI1nWHf = await NALfhNmhEH.transfer.call(addressuX0vUyX, uintD1k6XuC, {from: accounts[5]});

		assert.equal(uint256TScryOS, BigInt("2000000000000000000000000000"))
		assert.equal(uint8dbIVMQE, BigInt("18"))
		await expect(NALfhNmhEH.transfer.call(addressuX0vUyX, uintD1k6XuC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const addressWPiuQR9 = accounts[3]
		const stringuWp0GBY = await NALfhNmhEH.name.call({from: accounts[4]});
		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addressWPiuQR9, {from: accounts[3]});

		assert.equal(stringuWp0GBY, "Personal Token")
		assert.equal(uint256TScryOS, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const uintUq9Z0i = BigInt("1511")
		const uintj2QZgJg = BigInt("1628")
		const addresspxwBFiZ = accounts[0]
		const uintQDcdhPN = BigInt("54")
		const uint5R4o1U = BigInt("575")
		const address6vocPg = accounts[2]
		const addressRsVgTz = accounts[3]
//		const boolvPj4T6j = await NALfhNmhEH.lock.call(addresspxwBFiZ, uintj2QZgJg, uintUq9Z0i, {from: accounts[2]});
//		const boolorvf9pG = await NALfhNmhEH.transferWithLock.call(address6vocPg, uint5R4o1U, uintQDcdhPN, {from: accounts[5]});
//		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addressRsVgTz, {from: accounts[3]});

		await expect(NALfhNmhEH.lock.call(addresspxwBFiZ, uintj2QZgJg, uintUq9Z0i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const addressXyIniG = accounts[3]
		const addressEa4QW2q = accounts[3]
		const uint256LDEQ0LU = await NALfhNmhEH.totalSupply.call({from: accounts[1]});
		const addressVLRbnh = await NALfhNmhEH.transferOwnership.call(addressXyIniG, {from: accounts[2]});
		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addressEa4QW2q, {from: accounts[3]});

		assert.equal(uint256LDEQ0LU, BigInt("2000000000000000000000000000"))
		assert.equal(uint256TScryOS, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALfhNmhEH = await NAL.new({from: accounts[2]});
		const address4ydBTB = accounts[1]
		const addressC9BJi0H = accounts[3]
//		const addresslveYKb1 = await NALfhNmhEH.removeAdmin.call(address4ydBTB, {from: accounts[2]});
//		const uint256TScryOS = await NALfhNmhEH.balanceOf.call(addressC9BJi0H, {from: accounts[3]});

		await expect(NALfhNmhEH.removeAdmin.call(address4ydBTB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALEDwDZGd = await NAL.new({from: accounts[3]});
		const addressdSCs5of = accounts[0]
		const uintia4At76 = BigInt("663")
		const addressDjbfFtR = accounts[1]
		const addressesScPQt = accounts[1]
		const uintModE0zu = BigInt("314")
		const addressG3wijlU = accounts[3]
		const addressoXQiX92 = accounts[3]
		const boolls5R6T2 = await NALEDwDZGd.freezeAccount.call(addressdSCs5of, {from: accounts[3]});
//		const booldo39NCD = await NALEDwDZGd.transferFrom.call(addressesScPQt, addressDjbfFtR, uintia4At76, {from: accounts[4]});
//		const boolCViN13w = await NALEDwDZGd.transferFrom.call(addressoXQiX92, addressG3wijlU, uintModE0zu, {from: accounts[4]});

		assert.equal(boolls5R6T2, true)
		await expect(NALEDwDZGd.transferFrom.call(addressesScPQt, addressDjbfFtR, uintia4At76, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKGRrJs = await NAL.new({from: accounts[0]});
		const addressfFl5DPO = accounts[1]
		const uintqmnszfa = BigInt("581")
		const addressn4jONeY = accounts[1]
		const uintis5x4Ao = BigInt("648")
		const addressAdYhejf = accounts[3]
		const addressxMmmXfC = await NALKGRrJs.addAdmin.call(addressfFl5DPO, {from: accounts[0]});
		const boolcl4afQ = await NALKGRrJs.increaseAllowance.call(addressn4jONeY, uintqmnszfa, {from: accounts[2]});
//		await NALKGRrJs.whenPaused.call({from: accounts[1]});
//		const boolXWjek5j = await NALKGRrJs.paused.call({from: accounts[1]});
//		const booleUAV7Ee = await NALKGRrJs.approve.call(addressAdYhejf, uintis5x4Ao, {from: accounts[1]});
//		const stringcScUlPY = await NALKGRrJs.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcl4afQ, true)
		await expect(NALKGRrJs.whenPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})