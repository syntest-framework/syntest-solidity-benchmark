const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const addressbhlT2hB = accounts[3]
		const byteQMIIYt6 = "0x121f030f1a0916161a031307171718141c071504150c1a030a1b09070c150619"
		const address06O0gL = accounts[0]
		const uintOfDuBd = BigInt("1501")
		const bytebm0UDwz = "0x07201a09021a022019190b020a131b0c0d1e190e031a00140b1904010a091117"
		const uintyJDHeay = BigInt("1935")
		const addressvXddkVX = accounts[3]
		const uint256ljZElvY = await RevivedbKJeKk.totalBalanceOf.call(addressbhlT2hB, {from: accounts[5]});
		const uint256Z1HubRR = await RevivedbKJeKk.tokensUnlockable.call(address06O0gL, byteQMIIYt6, {from: accounts[3]});
		const addressASLSDIw = await RevivedbKJeKk.owner.call({from: accounts[3]});
		const boollTYRNM = await RevivedbKJeKk.increaseLockAmount.call(bytebm0UDwz, uintOfDuBd, {from: accounts[1]});
		const booleEMEBY = await RevivedbKJeKk.increaseAllowance.call(addressvXddkVX, uintyJDHeay, {from: accounts[2]});

		assert.equal(addressASLSDIw, 0x2A48bBCf690Da2e4804ED13f367d325E5f10a43B)
		assert.equal(uint256Z1HubRR, BigInt("0"))
		assert.equal(uint256ljZElvY, BigInt("3000000000000000000000000000"))
		await expect(RevivedbKJeKk.increaseLockAmount.call(bytebm0UDwz, uintOfDuBd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegBJw012 = await Revive.new({from: accounts[0]});
		const uintkoIA1Ce = BigInt("1724")
		const addressZRHKwEn = accounts[3]
		const addressujmKiuU = accounts[2]
		const uint256SNJuBRT = await RevivegBJw012.recoverERC20.call(uintkoIA1Ce, {from: accounts[3]});
		await RevivegBJw012.onlyOwner.call({from: accounts[2]});
		const uint256ZkbEXyI = await RevivegBJw012.allowance.call(addressujmKiuU, addressZRHKwEn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivegBJw012.recoverERC20.call(uintkoIA1Ce, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivewiruCyn = await Revive.new({from: accounts[2]});
		const uinto6NidF = BigInt("62")
		const addressjyIPax = "0x0000000000000000000000000000000000000001"
		const addresshbvsbEg = accounts[4]
		const addressigG14DO = accounts[2]
		const addressxh9x9Fg = accounts[5]
		const boolQhMyEd = await RevivewiruCyn.transfer.call(addressjyIPax, uinto6NidF, {from: accounts[0]});
		const uint256H1Ndczr = await RevivewiruCyn.allowance.call(addressigG14DO, addresshbvsbEg, {from: accounts[1]});
		const uint256b7yud0G = await RevivewiruCyn.unlock.call(addressxh9x9Fg, {from: accounts[5]});
		await RevivewiruCyn.renounceOwnership.call({from: accounts[1]});

		await expect(RevivewiruCyn.transfer.call(addressjyIPax, uinto6NidF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexFAaOvD = await Revive.new({from: accounts[3]});
		const addressgbNDexC = accounts[5]
		const byteUzSMro0 = "0x170d1003141d061a1519031816021020021918030c020411040e12050c161a1c"
		const addressoj3LGxO = "0x0000000000000000000000000000000000000001"
		const addressMO05Va8 = await RevivexFAaOvD.owner.call({from: accounts[3]});
		const addressWBvgvIL = await RevivexFAaOvD.transferOwnership.call(addressgbNDexC, {from: accounts[1]});
		const uint256AAVNhcl = await RevivexFAaOvD.tokensUnlockable.call(addressoj3LGxO, byteUzSMro0, {from: accounts[0]});
		const addresscwk5UiA = await RevivexFAaOvD.owner.call({from: accounts[3]});

		assert.equal(addressMO05Va8, 0x2A48bBCf690Da2e4804ED13f367d325E5f10a43B)
		await expect(RevivexFAaOvD.transferOwnership.call(addressgbNDexC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivee2cEoHT = await Revive.new({from: accounts[4]});
		await Revivee2cEoHT.onlyOwner.call({from: accounts[1]});
		const boolH3jfjnu = await Revivee2cEoHT.isOwner.call({from: accounts[3]});
		const addressueOuly6 = await Revivee2cEoHT.owner.call({from: accounts[2]});

		await expect(Revivee2cEoHT.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveCx4fW6g = await Revive.new({from: accounts[1]});
		const uinthgQBfhv = BigInt("1403")
		const uintUkBlKxw = BigInt("996")
		const addressanLCOYp = accounts[1]
		const addressC4y2KHS = accounts[4]
		const uintnRpeDx7 = BigInt("619")
		const bytewp4Whj = "0x05090515081c0e200e1309091807181d0b0413081a01190801101a130d1d0f0a"
		const uinta98ds4n = BigInt("1866")
		const uintEcQflrE = BigInt("1705")
		const byteUyUFXS = "0x131a131410191a07180d0f1c070a11020c0518121a0001120f0e170f17041b14"
		const addressshB3wyn = accounts[4]
		const uint256Y9mQsXH = await ReviveCx4fW6g.recoverERC20.call(uinthgQBfhv, {from: accounts[0]});
		const boolmvUHZbo = await ReviveCx4fW6g.isOwner.call({from: accounts[0]});
		const uint256ko69Tq2 = await ReviveCx4fW6g.totalSupply.call({from: accounts[3]});
		const boolQJHhwVS = await ReviveCx4fW6g.transferFrom.call(addressC4y2KHS, addressanLCOYp, uintUkBlKxw, {from: accounts[2]});
		const booljGdpDNw = await ReviveCx4fW6g.extendLock.call(bytewp4Whj, uintnRpeDx7, {from: accounts[2]});
		const booliJNrqME = await ReviveCx4fW6g.transferWithLock.call(addressshB3wyn, byteUyUFXS, uintEcQflrE, uinta98ds4n, {from: accounts[0]});

		await expect(ReviveCx4fW6g.recoverERC20.call(uinthgQBfhv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYjHNYBP = await Revive.new({from: accounts[3]});
		const addressroub9Vq = accounts[4]
		const addressuVm12w = accounts[2]
		const uintTkt8ypr = BigInt("1741")
		const byte95Golo = "0x1a100711081d161413160a171f111f1a060e001e1001181d0816111617030800"
		const uint5hmnHm = BigInt("1316")
		const addressfo1Egq1 = accounts[2]
		const uint256UWvtCTn = await ReviveYjHNYBP.allowance.call(addressuVm12w, addressroub9Vq, {from: "0x0000000000000000000000000000000000000001"});
		const boolJ50tGP9 = await ReviveYjHNYBP.increaseLockAmount.call(byte95Golo, uintTkt8ypr, {from: accounts[3]});
		await ReviveYjHNYBP.renounceOwnership.call({from: accounts[5]});
		const boolRIHg2m = await ReviveYjHNYBP.increaseAllowance.call(addressfo1Egq1, uint5hmnHm, {from: accounts[4]});

		assert.equal(uint256UWvtCTn, BigInt("0"))
		await expect(ReviveYjHNYBP.increaseLockAmount.call(byte95Golo, uintTkt8ypr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintIBIHdDD = BigInt("1561")
		const uintOGH3Vgw = BigInt("708")
		const byteBBAa16Q = "0x040c0a140c140e110619060e071a060a1a0d1612041b01200204080515170201"
		const addresss6bIXMk = accounts[1]
		const uint256j8dgnAD = await Revivez5ofx7F.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const booltAe5QUc = await Revivez5ofx7F.transferWithLock.call(addresss6bIXMk, byteBBAa16Q, uintOGH3Vgw, uintIBIHdDD, {from: accounts[0]});
		const addresshaa55gX = await Revivez5ofx7F.owner.call({from: accounts[5]});

		assert.equal(uint256j8dgnAD, BigInt("3000000000000000000000000000"))
		await expect(Revivez5ofx7F.transferWithLock.call(addresss6bIXMk, byteBBAa16Q, uintOGH3Vgw, uintIBIHdDD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveYjHNYBP = await Revive.new({from: accounts[3]});
		const addressLwz6sF9 = accounts[4]
		const address8bc8F0 = accounts[2]
		const uintFHTfug = BigInt("1815")
		const addressFDYeDRr = accounts[0]
		const uintBnIqQo0 = BigInt("1316")
		const addresstQIa7So = accounts[2]
		const uint256UWvtCTn = await ReviveYjHNYBP.allowance.call(address8bc8F0, addressLwz6sF9, {from: "0x0000000000000000000000000000000000000001"});
		const boolX7FAbMi = await ReviveYjHNYBP.increaseAllowance.call(addressFDYeDRr, uintFHTfug, {from: accounts[4]});
		await ReviveYjHNYBP.renounceOwnership.call({from: accounts[5]});
		const boolRIHg2m = await ReviveYjHNYBP.increaseAllowance.call(addresstQIa7So, uintBnIqQo0, {from: accounts[4]});

		assert.equal(boolX7FAbMi, true)
		assert.equal(uint256UWvtCTn, BigInt("0"))
		await expect(ReviveYjHNYBP.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegBJw012 = await Revive.new({from: accounts[0]});
		const uintIehXzh = BigInt("1700")
		const uint256SNJuBRT = await RevivegBJw012.recoverERC20.call(uintIehXzh, {from: accounts[3]});
		await RevivegBJw012.onlyOwner.call({from: accounts[2]});

		await expect(RevivegBJw012.recoverERC20.call(uintIehXzh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveiiKkPJV = await Revive.new({from: accounts[1]});
		const uintVEVsWwt = BigInt("1258")
		const addressvUrABxg = accounts[0]
		const bytewXapaSd = "0x1e051a050513080a200808001f100f130815001b0e1c0e06100f180707120001"
		const addressqbS9ZDz = "0x0000000000000000000000000000000000000001"
		const uintB1lXrR = BigInt("159")
		const addressdHfm8yz = accounts[1]
		const boolQkgszee = await ReviveiiKkPJV.approve.call(addressvUrABxg, uintVEVsWwt, {from: accounts[3]});
		const uint256PWeE6P = await ReviveiiKkPJV.tokensUnlockable.call(addressqbS9ZDz, bytewXapaSd, {from: accounts[1]});
		const uint256JMZ0cW = await ReviveiiKkPJV.totalSupply.call({from: accounts[1]});
		const boolTYWsJ6n = await ReviveiiKkPJV.isOwner.call({from: accounts[5]});
		const addresseQAN29l = await ReviveiiKkPJV.recoverERC20.call(addressdHfm8yz, uintB1lXrR, {from: accounts[3]});
		const boolJdHDOqo = await ReviveiiKkPJV.isOwner.call({from: accounts[3]});

		assert.equal(boolQkgszee, true)
		assert.equal(boolTYWsJ6n, false)
		assert.equal(uint256JMZ0cW, BigInt("3000000000000000000000000000"))
		assert.equal(uint256PWeE6P, BigInt("0"))
		await expect(ReviveiiKkPJV.recoverERC20.call(addressdHfm8yz, uintB1lXrR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const addresstTCahIU = accounts[3]
		const byteIX2vCar = "0x121f030f1a0916161a031307171718141c071504150c1a030a1b09070c150619"
		const addresszxCDeyW = accounts[0]
		const uintUs00KYA = BigInt("1501")
		const bytevZXPXGS = "0x07201a09021a022019190b020b131b0c0d1e190e031a00140b1904010a091117"
		const uinttLkLuuY = BigInt("1935")
		const addressqbvdo3 = accounts[3]
		await RevivedbKJeKk.renounceOwnership.call({from: accounts[3]});
		const booliEihUZO = await RevivedbKJeKk.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ljZElvY = await RevivedbKJeKk.totalBalanceOf.call(addresstTCahIU, {from: accounts[5]});
		const addressN4rkNxy = await RevivedbKJeKk.owner.call({from: accounts[1]});
		const uint256Z1HubRR = await RevivedbKJeKk.tokensUnlockable.call(addresszxCDeyW, byteIX2vCar, {from: accounts[3]});
		const boolsoy9oz = await RevivedbKJeKk.isOwner.call({from: accounts[1]});
		const boollTYRNM = await RevivedbKJeKk.increaseLockAmount.call(bytevZXPXGS, uintUs00KYA, {from: accounts[1]});
		const booleEMEBY = await RevivedbKJeKk.increaseAllowance.call(addressqbvdo3, uinttLkLuuY, {from: accounts[2]});

		await expect(RevivedbKJeKk.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const uintnJuv1Om = BigInt("1056")
		const uintr0MoPO = BigInt("1791")
		const byteVrD68ff = "0x200112080607171909111f1b150c20040c081b1c140f12200218100d0d100c1a"
		const addressSoKPS6J = accounts[3]
		const bytej6yK2es = "0x121f030f1a0916161a031307171718141c071504150c1a030a1b09070c150619"
		const addressyoAkotE = accounts[0]
		const uintMi1DjBW = BigInt("1501")
		const byteh106sUv = "0x07201a09021a022019190b020a131b0c0d1e190e031a00140b1904010a091117"
		const uintbt4nwep = BigInt("1113")
		const uintuDLQu4y = BigInt("1935")
		const addressebd9B70 = accounts[3]
		const boollMmvtLF = await RevivedbKJeKk.lock.call(byteVrD68ff, uintr0MoPO, uintnJuv1Om, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ljZElvY = await RevivedbKJeKk.totalBalanceOf.call(addressSoKPS6J, {from: accounts[5]});
		const uint256Z1HubRR = await RevivedbKJeKk.tokensUnlockable.call(addressyoAkotE, bytej6yK2es, {from: accounts[3]});
		const boollTYRNM = await RevivedbKJeKk.increaseLockAmount.call(byteh106sUv, uintMi1DjBW, {from: accounts[1]});
		const uint2568sUqxn = await RevivedbKJeKk.recoverERC20.call(uintbt4nwep, {from: accounts[0]});
		const booleEMEBY = await RevivedbKJeKk.increaseAllowance.call(addressebd9B70, uintuDLQu4y, {from: accounts[2]});

		await expect(RevivedbKJeKk.lock.call(byteVrD68ff, uintr0MoPO, uintnJuv1Om, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUGvAmKf = await Revive.new({from: accounts[0]});
		const addressiPppblT = accounts[4]
		const uintx1soYUE = BigInt("1225")
		const byteT8qixQn = "0x1a1b172007000e0b170c070a05150d0f100e1a1f0f0e0607150b20071f101f1a"
		const addressz14K3fY = accounts[4]
		const uintopkwklB = BigInt("1897")
		const bytelQokep4 = "0x050b060a1a17181e07150718121c12010e18011111001f1c1708190902051f02"
		const addressjiE1vEo = accounts[2]
		const uint256Fy3ljev = await ReviveUGvAmKf.totalBalanceOf.call(addressiPppblT, {from: accounts[2]});
		const boolPZ4jBql = await ReviveUGvAmKf.extendLock.call(byteT8qixQn, uintx1soYUE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CwPRQ0 = await ReviveUGvAmKf.unlock.call(addressz14K3fY, {from: accounts[1]});
		const uint2567thyZl = await ReviveUGvAmKf.recoverERC20.call(uintopkwklB, {from: accounts[4]});
		const uint256HCW7Eb1 = await ReviveUGvAmKf.tokensLocked.call(addressjiE1vEo, bytelQokep4, {from: accounts[2]});

		assert.equal(uint256Fy3ljev, BigInt("0"))
		await expect(ReviveUGvAmKf.extendLock.call(byteT8qixQn, uintx1soYUE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUGvAmKf = await Revive.new({from: accounts[0]});
		const addressPRUXa8Y = accounts[4]
		const addressGcxIsKD = accounts[5]
		const uintZnv7xSR = BigInt("1801")
		const addressl6ZtGG5 = accounts[1]
		const uintOXTTo8P = BigInt("1897")
		const byteqGccL0n = "0x050b060a1a17181e07150718121c12010e18011111001f1c1708190902051f02"
		const addressnREaNQ3 = accounts[2]
		const uint256Fy3ljev = await ReviveUGvAmKf.totalBalanceOf.call(addressPRUXa8Y, {from: accounts[2]});
		const uint256CwPRQ0 = await ReviveUGvAmKf.unlock.call(addressGcxIsKD, {from: accounts[1]});
		const boolF72UNvv = await ReviveUGvAmKf.increaseAllowance.call(addressl6ZtGG5, uintZnv7xSR, {from: accounts[0]});
		const uint2567thyZl = await ReviveUGvAmKf.recoverERC20.call(uintOXTTo8P, {from: accounts[4]});
		const uint256HCW7Eb1 = await ReviveUGvAmKf.tokensLocked.call(addressnREaNQ3, byteqGccL0n, {from: accounts[2]});

		assert.equal(boolF72UNvv, true)
		assert.equal(uint256CwPRQ0, BigInt("0"))
		assert.equal(uint256Fy3ljev, BigInt("0"))
		await expect(ReviveUGvAmKf.recoverERC20.call(uintOXTTo8P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverPlftNI = await Revive.new({from: accounts[5]});
		const uintyHLgamP = BigInt("1113")
		const addresswFf3VUM = accounts[1]
		const addressHUDBM2 = accounts[0]
		const addressIIErUQ = "0x0000000000000000000000000000000000000001"
		const addressBmnjCM = accounts[0]
		const boolcBCUfb = await ReviverPlftNI.transferFrom.call(addressHUDBM2, addresswFf3VUM, uintyHLgamP, {from: accounts[0]});
		const uint256FStBFNr = await ReviverPlftNI.balanceOf.call(addressIIErUQ, {from: accounts[5]});
		const uint256fTWyJLV = await ReviverPlftNI.balanceOf.call(addressBmnjCM, {from: accounts[4]});

		await expect(ReviverPlftNI.transferFrom.call(addressHUDBM2, addresswFf3VUM, uintyHLgamP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivedbKJeKk = await Revive.new({from: accounts[3]});
		const addressVDFpzVU = accounts[4]
		const uintbxj9CfT = BigInt("1745")
		const addressQPoslsf = accounts[1]
		const byteoiSxm6r = "0x121f030f1a0916161a031307171718141c071504150c1a030a1b09070c150619"
		const addressV74B4RZ = accounts[0]
		const uinte6YObEH = BigInt("1501")
		const bytec9lLHi9 = "0x07201a09021a022019190b020a131b0c0d1e190e031a00140b1904010a091117"
		const uintyI7HGI8 = BigInt("1935")
		const addressBP8tsxR = accounts[3]
		const byteV6zRbYr = "0x1c020b0400021614091413090b031d110e18050c1e1b12081307171a16141817"
		const addressJWlZM6 = accounts[2]
		const uint256ljZElvY = await RevivedbKJeKk.totalBalanceOf.call(addressVDFpzVU, {from: accounts[5]});
		const boolHEK675s = await RevivedbKJeKk.decreaseAllowance.call(addressQPoslsf, uintbxj9CfT, {from: accounts[1]});
		const uint256Z1HubRR = await RevivedbKJeKk.tokensUnlockable.call(addressV74B4RZ, byteoiSxm6r, {from: accounts[3]});
		const addressASLSDIw = await RevivedbKJeKk.owner.call({from: accounts[3]});
		const boollTYRNM = await RevivedbKJeKk.increaseLockAmount.call(bytec9lLHi9, uinte6YObEH, {from: accounts[1]});
		const booleEMEBY = await RevivedbKJeKk.increaseAllowance.call(addressBP8tsxR, uintyI7HGI8, {from: accounts[2]});
		const uint256crxMTyH = await RevivedbKJeKk.tokensUnlockable.call(addressJWlZM6, byteV6zRbYr, {from: accounts[2]});

		assert.equal(uint256ljZElvY, BigInt("0"))
		await expect(RevivedbKJeKk.decreaseAllowance.call(addressQPoslsf, uintbxj9CfT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintI6sMhAy = BigInt("1561")
		const uint3h6ROZ = BigInt("708")
		const byteQlNZH1j = "0x040c0a140c140e110619060e071a060a1a0d1612041b0120020408051517fffffffe01"
		const addressUcQT834 = accounts[1]
		const addresse9oOLik = accounts[1]
		const booltAe5QUc = await Revivez5ofx7F.transferWithLock.call(addressUcQT834, byteQlNZH1j, uint3h6ROZ, uintI6sMhAy, {from: accounts[0]});
		const addresshaa55gX = await Revivez5ofx7F.owner.call({from: accounts[5]});
		const uint256VBYg0D = await Revivez5ofx7F.totalBalanceOf.call(addresse9oOLik, {from: accounts[5]});

		await expect(Revivez5ofx7F.transferWithLock.call(addressUcQT834, byteQlNZH1j, uint3h6ROZ, uintI6sMhAy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressGdzXMGH = accounts[0]
		const uintt67IqHs = BigInt("1047")
		const uint256YMn4hfH = await Revivez5ofx7F.unlock.call(addressGdzXMGH, {from: accounts[5]});
		const uint256j8dgnAD = await Revivez5ofx7F.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256WzYDQKU = await Revivez5ofx7F.recoverERC20.call(uintt67IqHs, {from: accounts[4]});

		assert.equal(uint256YMn4hfH, BigInt("0"))
		assert.equal(uint256j8dgnAD, BigInt("3000000000000000000000000000"))
		await expect(Revivez5ofx7F.recoverERC20.call(uintt67IqHs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefUklbo = await Revive.new({from: accounts[1]});
		const addressujKCHGk = accounts[1]
		const addressLEEdWue = accounts[3]
		const uint256vsAM3XH = await RevivefUklbo.getUnlockableTokens.call(addressujKCHGk, {from: accounts[3]});
		const uint256lNWLMhX = await RevivefUklbo.balanceOf.call(addressLEEdWue, {from: accounts[2]});

		assert.equal(uint256lNWLMhX, BigInt("0"))
		assert.equal(uint256vsAM3XH, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintgxjqqcb = BigInt("120")
		const uint1DeNNy = BigInt("1561")
		const uintO3jjbYl = BigInt("2003")
		const byteiaN5pzC = "0x040c0a140c140e110619060e071a060a1a0d1612041b01200204080515170201"
		const addressA5a0yz8 = accounts[1]
		const uintsu1mU9d = BigInt("1462")
		const addressoPLAdw3 = accounts[2]
		const uint256XqATMij = await Revivez5ofx7F.recoverERC20.call(uintgxjqqcb, {from: "0x0000000000000000000000000000000000000001"});
		const boolZzYd3A7 = await Revivez5ofx7F.isOwner.call({from: accounts[3]});
		const booltAe5QUc = await Revivez5ofx7F.transferWithLock.call(addressA5a0yz8, byteiaN5pzC, uintO3jjbYl, uint1DeNNy, {from: accounts[0]});
		const boolkVUvi7T = await Revivez5ofx7F.decreaseAllowance.call(addressoPLAdw3, uintsu1mU9d, {from: accounts[5]});

		await expect(Revivez5ofx7F.recoverERC20.call(uintgxjqqcb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMsw4vc = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uinthG5NIkX = BigInt("1280")
		const addresswlmCanh = accounts[4]
		const uintlmFY1NO = BigInt("368")
		const byteOTrOezs = "0x1c1713050d1c191f1d10080c190c16071c16131f0a0a1b08020a191716181801"
		const uintAh5axlp = BigInt("1498")
		const boolPCISMOJ = await ReviveMsw4vc.approve.call(addresswlmCanh, uinthG5NIkX, {from: accounts[0]});
		const boolCsHhgkB = await ReviveMsw4vc.extendLock.call(byteOTrOezs, uintlmFY1NO, {from: accounts[1]});
		await ReviveMsw4vc.renounceOwnership.call({from: accounts[0]});
		const uint256vaGaZX1 = await ReviveMsw4vc.recoverERC20.call(uintAh5axlp, {from: accounts[1]});
		await ReviveMsw4vc.onlyOwner.call({from: accounts[0]});
	});

	it('test for Revive', async () => {
		const RevivecBrgBa = await Revive.new({from: accounts[4]});
		const uintuCW3Pd = BigInt("837")
		const byteNVOJ1sZ = "0x021e07001f070b020a030d0c190820021409010d06001808070d2015091a040f"
		const addressBk8vUpq = accounts[0]
		const addressw1C8Gfr = accounts[0]
		const uint60RDbW = BigInt("1629")
		const uintLpmlqNs = BigInt("516")
		const byteJ8jtEU1 = "0x131a00011b130e0717190e060f120b0a1b1a0f030e091a1e18150b0019090e18"
		const addressQCTbwo = accounts[1]
		const byteyIjWB5h = "0x16030e03130c090e0401190c110602120c1a0f120a12081f120b0c1607091411"
		const addressayNG1Cw = accounts[3]
		const addressJqtmi4M = accounts[1]
		const uintmuIJZa8 = BigInt("1150")
		const addressdLi9pbl = accounts[1]
		const uint256gV0kI3A = await RevivecBrgBa.tokensLockedAtTime.call(addressBk8vUpq, byteNVOJ1sZ, uintuCW3Pd, {from: accounts[3]});
		const uint256V5PPMKY = await RevivecBrgBa.balanceOf.call(addressw1C8Gfr, {from: accounts[0]});
		const boolzgSowT5 = await RevivecBrgBa.transferWithLock.call(addressQCTbwo, byteJ8jtEU1, uintLpmlqNs, uint60RDbW, {from: accounts[4]});
		const uint256hZzK6Xn = await RevivecBrgBa.tokensLocked.call(addressayNG1Cw, byteyIjWB5h, {from: accounts[1]});
		const uint256ww7OIl = await RevivecBrgBa.totalBalanceOf.call(addressJqtmi4M, {from: accounts[3]});
		const addressiOpxPAe = await RevivecBrgBa.recoverERC20.call(addressdLi9pbl, uintmuIJZa8, {from: accounts[1]});

		assert.equal(boolzgSowT5, true)
		assert.equal(uint256V5PPMKY, BigInt("0"))
		assert.equal(uint256gV0kI3A, BigInt("0"))
		assert.equal(uint256hZzK6Xn, BigInt("0"))
		assert.equal(uint256ww7OIl, BigInt("0"))
		await expect(RevivecBrgBa.recoverERC20.call(addressdLi9pbl, uintmuIJZa8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivecBrgBa = await Revive.new({from: accounts[4]});
		const uintsQdIu6 = BigInt("837")
		const bytewVU5J5r = "0x021e07001f070b020a030d0c190820021409010d06001808070d2015091a040f"
		const addressCnas7Gx = accounts[0]
		const addresszxDse0 = accounts[0]
		const uintsXHi6rH = BigInt("1629")
		const uintXyCbxz3 = BigInt("516")
		const byteRfzPi9h = "0x131a00011b130e0717190e060f120b0a1b1a0f030e091a1e18150b0019090e18"
		const address0CzCT9 = accounts[2]
		const byte7m6TdA = "0x16030e03130c090e0401190c110602120c1a0f120a12081f120b0c1607091411"
		const addressroiT0f2 = accounts[4]
		const bytewwrHKHv = "0x0a07010203101c130e1412140d12190e01081d070b0901040f01181a0705110d"
		const addressmT6sp3o = "0x0000000000000000000000000000000000000001"
		const addressIif1at = accounts[1]
		const addressHL1GXhb = accounts[0]
		const uintsswkdS = BigInt("1273")
		const addressQlgNiuq = accounts[0]
		const uintZOuvlCy = BigInt("2021")
		const addressPS61N41 = accounts[0]
		const uintadWTAQD = BigInt("1150")
		const addressfwS4ZNb = accounts[1]
		const uintGPt9HJl = BigInt("439")
		const addressdOAkbO = accounts[2]
		const uint256gV0kI3A = await RevivecBrgBa.tokensLockedAtTime.call(addressCnas7Gx, bytewVU5J5r, uintsQdIu6, {from: accounts[3]});
		const uint256V5PPMKY = await RevivecBrgBa.balanceOf.call(addresszxDse0, {from: accounts[0]});
		const boolzgSowT5 = await RevivecBrgBa.transferWithLock.call(address0CzCT9, byteRfzPi9h, uintXyCbxz3, uintsXHi6rH, {from: accounts[4]});
		const uint256hZzK6Xn = await RevivecBrgBa.tokensLocked.call(addressroiT0f2, byte7m6TdA, {from: accounts[1]});
		const uint256BIDHGPC = await RevivecBrgBa.tokensUnlockable.call(addressmT6sp3o, bytewwrHKHv, {from: accounts[3]});
		const uint256ww7OIl = await RevivecBrgBa.totalBalanceOf.call(addressIif1at, {from: accounts[3]});
		const uint256TfF7OND = await RevivecBrgBa.getUnlockableTokens.call(addressHL1GXhb, {from: accounts[1]});
		const addresse8qigfB = await RevivecBrgBa.recoverERC20.call(addressQlgNiuq, uintsswkdS, {from: accounts[4]});
		const boolSEhpokl = await RevivecBrgBa.decreaseAllowance.call(addressPS61N41, uintZOuvlCy, {from: accounts[3]});
		const addressiOpxPAe = await RevivecBrgBa.recoverERC20.call(addressfwS4ZNb, uintadWTAQD, {from: accounts[1]});
		const booldz6UJ6z = await RevivecBrgBa.approve.call(addressdOAkbO, uintGPt9HJl, {from: accounts[2]});

		assert.equal(boolzgSowT5, true)
		assert.equal(uint256BIDHGPC, BigInt("0"))
		assert.equal(uint256TfF7OND, BigInt("0"))
		assert.equal(uint256V5PPMKY, BigInt("0"))
		assert.equal(uint256gV0kI3A, BigInt("0"))
		assert.equal(uint256hZzK6Xn, BigInt("0"))
		assert.equal(uint256ww7OIl, BigInt("0"))
		await expect(RevivecBrgBa.recoverERC20.call(addressQlgNiuq, uintsswkdS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverPoqvwy = await Revive.new({from: accounts[1]});
		const address4YMxU5 = accounts[2]
		const uintFXuSn7h = BigInt("1798")
		const addressYk0048x = accounts[1]
		const addressEuzEMPL = await ReviverPoqvwy.transferOwnership.call(address4YMxU5, {from: accounts[1]});
		const boolDNtGRwe = await ReviverPoqvwy.approve.call(addressYk0048x, uintFXuSn7h, {from: accounts[4]});

		assert.equal(boolDNtGRwe, true)
	});

	it('test for Revive', async () => {
		const RevivecBrgBa = await Revive.new({from: accounts[4]});
		const uintxgh0xC3 = BigInt("837")
		const byteWWQLyN9 = "0x021e07001f070b020a030d0c190820021409010d06001808070d2015091a040f"
		const addressFAdORw0 = accounts[0]
		const addressHVlm8v8 = accounts[0]
		const uinttCNKDUW = BigInt("1629")
		const uinti7R6YrA = BigInt("516")
		const byteF7vBpi9 = "0x131a00011b130e0717190e060f120b0a1b1a0f030e091a1e18150b0019090e18"
		const addressAduYlU = accounts[2]
		const byteJPATpZ = "0x16030e03130c090e0401190c110602120c1a0f120a12081f120b0c1607091411"
		const addressccskQL = accounts[3]
		const bytejPfqo2u = "0x0a07010203101c130e1412140d12190e01081d070b09ffffffff040f01181a0705110d"
		const addressOrIuOkU = "0x0000000000000000000000000000000000000001"
		const addressGVk4RO = accounts[1]
		const addresspibcEfQ = accounts[0]
		const uintwGDuTK5 = BigInt("2021")
		const addressDBtgH5H = accounts[0]
		const uintwCl7iKE = BigInt("1150")
		const addresslzGXiQW = accounts[1]
		const uinttogKwiP = BigInt("439")
		const addressvvEfogt = accounts[2]
		const uintwymBhBr = BigInt("209")
		const bytedM5Vs8x = "0x1613010203100a000609081901141f19091f1c1d02070d09091a090a010f1016"
		const uint256gV0kI3A = await RevivecBrgBa.tokensLockedAtTime.call(addressFAdORw0, byteWWQLyN9, uintxgh0xC3, {from: accounts[3]});
		const uint256V5PPMKY = await RevivecBrgBa.balanceOf.call(addressHVlm8v8, {from: accounts[0]});
		const boolzgSowT5 = await RevivecBrgBa.transferWithLock.call(addressAduYlU, byteF7vBpi9, uinti7R6YrA, uinttCNKDUW, {from: accounts[4]});
		const uint256hZzK6Xn = await RevivecBrgBa.tokensLocked.call(addressccskQL, byteJPATpZ, {from: accounts[1]});
		const uint256BIDHGPC = await RevivecBrgBa.tokensUnlockable.call(addressOrIuOkU, bytejPfqo2u, {from: accounts[3]});
		const uint256ww7OIl = await RevivecBrgBa.totalBalanceOf.call(addressGVk4RO, {from: accounts[3]});
		const uint256TfF7OND = await RevivecBrgBa.getUnlockableTokens.call(addresspibcEfQ, {from: accounts[1]});
		const boolSEhpokl = await RevivecBrgBa.decreaseAllowance.call(addressDBtgH5H, uintwGDuTK5, {from: accounts[3]});
		const addressiOpxPAe = await RevivecBrgBa.recoverERC20.call(addresslzGXiQW, uintwCl7iKE, {from: accounts[1]});
		const booldz6UJ6z = await RevivecBrgBa.approve.call(addressvvEfogt, uinttogKwiP, {from: accounts[2]});
		const boolFhdlmfH = await RevivecBrgBa.extendLock.call(bytedM5Vs8x, uintwymBhBr, {from: accounts[2]});

		assert.equal(boolzgSowT5, true)
		assert.equal(uint256V5PPMKY, BigInt("0"))
		assert.equal(uint256gV0kI3A, BigInt("0"))
		assert.equal(uint256hZzK6Xn, BigInt("0"))
		await expect(RevivecBrgBa.tokensUnlockable.call(addressOrIuOkU, bytejPfqo2u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivecBrgBa = await Revive.new({from: accounts[4]});
		const uintA0xtnVY = BigInt("119")
		const uintSZGUfZf = BigInt("1389")
		const uintzqc4i0z = BigInt("1439")
		const byteI4ES2zE = "0x12160a160d1e0d16170d1b0e191f1204100e17151f0f071a070a140e1e130a1a"
		const uint256qqCpnu = await RevivecBrgBa.recoverERC20.call(uintA0xtnVY, {from: accounts[2]});
		const boolAosN4Fd = await RevivecBrgBa.lock.call(byteI4ES2zE, uintzqc4i0z, uintSZGUfZf, {from: accounts[0]});

		await expect(RevivecBrgBa.recoverERC20.call(uintA0xtnVY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivecBrgBa = await Revive.new({from: accounts[4]});
		const addressTmkrP8Y = accounts[2]
		const uintm4nM5Pi = BigInt("551")
		const uintfytiYzq = BigInt("215")
		const addressf1C0JfN = "0x0000000000000000000000000000000000000001"
		const addressAX9ADL = accounts[4]
		const uint256ww7OIl = await RevivecBrgBa.totalBalanceOf.call(addressTmkrP8Y, {from: accounts[3]});
		const uint256lqNnld4 = await RevivecBrgBa.recoverERC20.call(uintm4nM5Pi, {from: accounts[1]});
		const boolkFPelbg = await RevivecBrgBa.transferFrom.call(addressAX9ADL, addressf1C0JfN, uintfytiYzq, {from: accounts[3]});

		assert.equal(uint256ww7OIl, BigInt("0"))
		await expect(RevivecBrgBa.recoverERC20.call(uintm4nM5Pi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeSe1qVO = await Revive.new({from: accounts[0]});
		const addressMZKkN3j = accounts[3]
		const uintooym774 = BigInt("313")
		const addressjDYb0ls = accounts[1]
		const uintIfB3fJH = BigInt("1260")
		const byteo6DRnPr = "0x02120b0819180d0204010419101b111b0020110804191911020d0b1c1a16010d"
		const addressSzHRoax = accounts[2]
		const addressmd4cBo = accounts[1]
		const uint256hJFeDB = await ReviveeSe1qVO.getUnlockableTokens.call(addressMZKkN3j, {from: accounts[2]});
		const boolRFU29xe = await ReviveeSe1qVO.approve.call(addressjDYb0ls, uintooym774, {from: accounts[4]});
		const uint256a4ycfnQ = await ReviveeSe1qVO.recoverERC20.call(uintIfB3fJH, {from: accounts[0]});
		const uint256semNHsJ = await ReviveeSe1qVO.tokensUnlockable.call(addressSzHRoax, byteo6DRnPr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rBG73yH = await ReviveeSe1qVO.unlock.call(addressmd4cBo, {from: accounts[4]});

		assert.equal(boolRFU29xe, true)
		assert.equal(uint256hJFeDB, BigInt("0"))
		await expect(ReviveeSe1qVO.recoverERC20.call(uintIfB3fJH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const uintaA24dLT = BigInt("1812")
		const addressT22yT3s = accounts[2]
		const uint256sxUcjkM = await Revivez5ofx7F.recoverERC20.call(uintaA24dLT, {from: accounts[2]});
		const uint256YMn4hfH = await Revivez5ofx7F.unlock.call(addressT22yT3s, {from: accounts[5]});

		await expect(Revivez5ofx7F.recoverERC20.call(uintaA24dLT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivez5ofx7F = await Revive.new({from: accounts[4]});
		const addressvmGCYPb = accounts[1]
		const addressY5xoQa = accounts[0]
		const addressaMENir = accounts[2]
		const uintnVgdSN5 = BigInt("1299")
		const uint256YMn4hfH = await Revivez5ofx7F.unlock.call(addressvmGCYPb, {from: accounts[5]});
		const uint256LR5F5CK = await Revivez5ofx7F.allowance.call(addressaMENir, addressY5xoQa, {from: accounts[0]});
		const uint256zOZnhNh = await Revivez5ofx7F.recoverERC20.call(uintnVgdSN5, {from: accounts[2]});

		assert.equal(uint256LR5F5CK, BigInt("0"))
		assert.equal(uint256YMn4hfH, BigInt("0"))
		await expect(Revivez5ofx7F.recoverERC20.call(uintnVgdSN5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivecBrgBa = await Revive.new({from: accounts[4]});
		const uintjGSQMG3 = BigInt("89")
		const addressrJTOXM4 = accounts[2]
		const uintQLOPlZA = BigInt("68")
		const bytehAnLJ2z = "0x1f19130f1512090c0c00121f060b1d1d1900030703151515110a101b131b1420"
		const addresscRxJcdF = accounts[2]
		const uintxdIZMS6 = BigInt("390")
		const uintyghNmv = BigInt("1304")
		const uintdezsWJe = BigInt("723")
		const bytelplEF50 = "0x04130e1d16140e0e1507200f0c071a0d080a0b0810042013001914130510020c"
		const addressQupE5TO = accounts[1]
		const addressKkze5kc = accounts[1]
		const boolDWuSZEx = await RevivecBrgBa.approve.call(addressrJTOXM4, uintjGSQMG3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bDof38d = await RevivecBrgBa.tokensLockedAtTime.call(addresscRxJcdF, bytehAnLJ2z, uintQLOPlZA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256CHOYTUP = await RevivecBrgBa.recoverERC20.call(uintxdIZMS6, {from: accounts[0]});
		const boolwG901r0 = await RevivecBrgBa.transferWithLock.call(addressQupE5TO, bytelplEF50, uintdezsWJe, uintyghNmv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bW5TTLP = await RevivecBrgBa.unlock.call(addressKkze5kc, {from: accounts[5]});

		assert.equal(boolDWuSZEx, true)
		assert.equal(uint256bDof38d, BigInt("0"))
		await expect(RevivecBrgBa.recoverERC20.call(uintxdIZMS6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefUklbo = await Revive.new({from: accounts[1]});
		const byteojQkVtO = "0x1f1c1f160b0a011808041a010e181920000a0d011b021e1f0317051d0c000f0f"
		const addressN8mSxYp = accounts[0]
		const addressnI4AZe9 = accounts[3]
		const uintC3G6B1b = BigInt("1735")
		const uint256307Qxm = await RevivefUklbo.tokensLocked.call(addressN8mSxYp, byteojQkVtO, {from: accounts[3]});
		const uint256vsAM3XH = await RevivefUklbo.getUnlockableTokens.call(addressnI4AZe9, {from: accounts[3]});
		const uint256GdwpsIk = await RevivefUklbo.recoverERC20.call(uintC3G6B1b, {from: accounts[3]});

		assert.equal(uint256307Qxm, BigInt("0"))
		assert.equal(uint256vsAM3XH, BigInt("0"))
		await expect(RevivefUklbo.recoverERC20.call(uintC3G6B1b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})