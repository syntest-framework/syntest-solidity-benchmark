const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZMeEZCm = await AntiBaseProtocol.new({from: accounts[1]});
		const addressSMJHiNI = accounts[2]
		const uintIL8txEI = BigInt("130")
		const boolvlMG3in = await AntiBaseProtocolZMeEZCm.isOwner.call({from: accounts[1]});
		const addressY3KWtcd = await AntiBaseProtocolZMeEZCm._transferOwnership.call(addressSMJHiNI, {from: accounts[1]});
		const uint256X92QhI = await AntiBaseProtocolZMeEZCm.burn.call(uintIL8txEI, {from: accounts[0]});

		assert.equal(boolvlMG3in, true)
		await expect(AntiBaseProtocolZMeEZCm._transferOwnership.call(addressSMJHiNI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringxg4jpCa = "mWBmGeKQWl2mGm9HMwCFPogeLcO4rqYvxmufdxnOVLR5K8IEdw19Non2o31r"
		const stringBitBWTQ = "hOk3btsNulEVondyTaNThadANXyAN6x5Isg6ZY7PAsSigvUdyB0U0r2jafCu2amNPiPEIFz3MfHp2nv6JWVakmt9Ipe"
		const uintUP0N1Uj = BigInt("129")
		const AntiBaseProtocolrb0Vksb = await AntiBaseProtocol.new(stringxg4jpCa, stringBitBWTQ, uintUP0N1Uj, {from: accounts[5]});
		const uintWfFuU7 = BigInt("192")
		const addressDgnzP2c = accounts[2]
		const addresssGVSWsG = await AntiBaseProtocolrb0Vksb._burn.call(addressDgnzP2c, uintWfFuU7, {from: accounts[3]});
		const stringsBIWQKG = await AntiBaseProtocolrb0Vksb.symbol.call({from: accounts[5]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolE301FG5 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintwg3q8FP = BigInt("289")
		const addressTUOGn78 = accounts[1]
		const uintPMZQchg = BigInt("760")
		const addresspz1OmPE = "0x0000000000000000000000000000000000000001"
		const uintOGZAFN1 = BigInt("177")
		const addressOfgUw1W = await AntiBaseProtocolE301FG5.burnFrom.call(addressTUOGn78, uintwg3q8FP, {from: accounts[3]});
		const addressx5Wqll3 = await AntiBaseProtocolE301FG5.burnFrom.call(addresspz1OmPE, uintPMZQchg, {from: accounts[3]});
		const uint256UjwhKke = await AntiBaseProtocolE301FG5.findRewardFee.call(uintOGZAFN1, {from: accounts[5]});

		await expect(AntiBaseProtocolE301FG5.burnFrom.call(addressTUOGn78, uintwg3q8FP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolmVu6G4p = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintN5Nuse = BigInt("985")
		const uintHIObi86 = BigInt("463")
		const addressChhJTEx = accounts[3]
		const addressPJVWYTE = accounts[0]
		const addresswanKH9v = accounts[1]
		const uint256k65Emds = await AntiBaseProtocolmVu6G4p.findRewardFee.call(uintN5Nuse, {from: accounts[3]});
		const addressR2K5hp = await AntiBaseProtocolmVu6G4p._mint.call(addressChhJTEx, uintHIObi86, {from: accounts[0]});
		const stringCvvkBcA = await AntiBaseProtocolmVu6G4p.name.call({from: accounts[2]});
		const uint256ONjdaGR = await AntiBaseProtocolmVu6G4p.allowance.call(addresswanKH9v, addressPJVWYTE, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uintZAAUWS = BigInt("509")
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});
		const uint256gZ81ll = await AntiBaseProtocolf0cdjQc.findRewardFee.call(uintZAAUWS, {from: accounts[4]});

		assert.equal(boolQ3UkXR2, false)
		assert.equal(uint256gZ81ll, BigInt("30"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const addressjpejiN = accounts[5]
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});
		const uint8l35FPyk = await AntiBaseProtocolf0cdjQc.decimals.call({from: accounts[3]});
		const addressPcgUFu = await AntiBaseProtocolf0cdjQc.transferOwnership.call(addressjpejiN, {from: accounts[1]});

		assert.equal(boolQ3UkXR2, false)
		assert.equal(uint8l35FPyk, BigInt("18"))
		await expect(AntiBaseProtocolf0cdjQc.transferOwnership.call(addressjpejiN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb9wNLFK = await AntiBaseProtocol.new({from: accounts[2]});
		const addressHui5Hhs = accounts[3]
		const address9U2bxK = accounts[1]
		const uint256o9iiR2j = await AntiBaseProtocolb9wNLFK.allowance.call(address9U2bxK, addressHui5Hhs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256o9iiR2j, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uintWHqF9vP = BigInt("509")
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});
		const uint256gZ81ll = await AntiBaseProtocolf0cdjQc.findRewardFee.call(uintWHqF9vP, {from: accounts[4]});
		const addressiikO9TL = await AntiBaseProtocolf0cdjQc.owner.call({from: accounts[4]});

		assert.equal(addressiikO9TL, 0xeBBc1A6BE6E0d54729c738653f2BED58eBaA0D59)
		assert.equal(boolQ3UkXR2, false)
		assert.equal(uint256gZ81ll, BigInt("30"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const addressvM1iet = "0x0000000000000000000000000000000000000001"
		const uintZ2lIE7m = BigInt("693")
		const uintKCMqmR8 = BigInt("515")
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});
		const uint256yEmMM8 = await AntiBaseProtocolf0cdjQc.balanceOf.call(addressvM1iet, {from: accounts[3]});
		const uint256ic3Le5t = await AntiBaseProtocolf0cdjQc.findRewardFee.call(uintZ2lIE7m, {from: accounts[2]});
		const uint256gZ81ll = await AntiBaseProtocolf0cdjQc.findRewardFee.call(uintKCMqmR8, {from: accounts[4]});

		assert.equal(boolQ3UkXR2, false)
		assert.equal(uint256gZ81ll, BigInt("30"))
		assert.equal(uint256ic3Le5t, BigInt("35"))
		assert.equal(uint256yEmMM8, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uintwGQrbnP = BigInt("509")
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});
		const uint256wrBWP4p = await AntiBaseProtocolf0cdjQc.totalSupply.call({from: accounts[4]});
		const uint256gZ81ll = await AntiBaseProtocolf0cdjQc.findRewardFee.call(uintwGQrbnP, {from: accounts[4]});
		const stringRum8kGc = await AntiBaseProtocolf0cdjQc.name.call({from: accounts[4]});

		assert.equal(boolQ3UkXR2, false)
		assert.equal(stringRum8kGc, "https://t.me/antibaseprotocol")
		assert.equal(uint256gZ81ll, BigInt("30"))
		assert.equal(uint256wrBWP4p, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uintbDu3gkl = BigInt("387")
		const addressJXCJ5Tb = accounts[2]
		const addressPdzSvat = accounts[2]
		const boolKt0GGAx = await AntiBaseProtocolf0cdjQc.transferFrom.call(addressPdzSvat, addressJXCJ5Tb, uintbDu3gkl, {from: accounts[5]});
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});

		await expect(AntiBaseProtocolf0cdjQc.transferFrom.call(addressPdzSvat, addressJXCJ5Tb, uintbDu3gkl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb9wNLFK = await AntiBaseProtocol.new({from: accounts[2]});
		const addressPI21hz = accounts[3]
		const addressvg8WvIH = accounts[1]
		const uintui3qUhi = BigInt("356")
		const addressNvdG44R = accounts[0]
		const uint256o9iiR2j = await AntiBaseProtocolb9wNLFK.allowance.call(addressvg8WvIH, addressPI21hz, {from: "0x0000000000000000000000000000000000000001"});
		const boolL1KHtZI = await AntiBaseProtocolb9wNLFK.decreaseAllowance.call(addressNvdG44R, uintui3qUhi, {from: accounts[1]});

		assert.equal(uint256o9iiR2j, BigInt("0"))
		await expect(AntiBaseProtocolb9wNLFK.decreaseAllowance.call(addressNvdG44R, uintui3qUhi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb9wNLFK = await AntiBaseProtocol.new({from: accounts[2]});
		const uintWmIphd = BigInt("1404")
		const address5YDlVM = accounts[3]
		const addressccWQSmE = accounts[1]
		const uint256gGxhwAf = await AntiBaseProtocolb9wNLFK.findRewardFee.call(uintWmIphd, {from: accounts[2]});
		const stringuM06IpU = await AntiBaseProtocolb9wNLFK.symbol.call({from: accounts[4]});
		await AntiBaseProtocolb9wNLFK.requestGas.call({from: accounts[3]});
		const uint256o9iiR2j = await AntiBaseProtocolb9wNLFK.allowance.call(addressccWQSmE, address5YDlVM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringuM06IpU, "ABASE")
		assert.equal(uint256gGxhwAf, BigInt("75"))
		await expect(AntiBaseProtocolb9wNLFK.requestGas.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uintSt4L4Vl = BigInt("387")
		const addressfR1lO61 = accounts[2]
		const addressMR34Zfe = accounts[3]
		const uintxh9M9eN = BigInt("1183")
		const uintGkY1Wr6 = BigInt("1094")
		const addresseryWMEg = accounts[4]
		const boolKt0GGAx = await AntiBaseProtocolf0cdjQc.transferFrom.call(addressMR34Zfe, addressfR1lO61, uintSt4L4Vl, {from: accounts[5]});
		const addressiAGOoWP = await AntiBaseProtocolf0cdjQc.owner.call({from: accounts[4]});
		const uint256rJOP4oS = await AntiBaseProtocolf0cdjQc.burn.call(uintxh9M9eN, {from: "0x0000000000000000000000000000000000000001"});
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});
		const addresspKf5rsO = await AntiBaseProtocolf0cdjQc.burnFrom.call(addresseryWMEg, uintGkY1Wr6, {from: accounts[2]});

		await expect(AntiBaseProtocolf0cdjQc.transferFrom.call(addressMR34Zfe, addressfR1lO61, uintSt4L4Vl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uintP3CfvH = BigInt("1544")
		const addressDKE9kJp = accounts[4]
		const uintMj94Fu7 = BigInt("1843")
		const boolj7l75vz = await AntiBaseProtocolf0cdjQc.approve.call(addressDKE9kJp, uintP3CfvH, {from: accounts[3]});
		const uint256G3Ld6ZC = await AntiBaseProtocolf0cdjQc.findBurnFee.call(uintMj94Fu7, {from: accounts[4]});
		const addressqJzLSn3 = await AntiBaseProtocolf0cdjQc.owner.call({from: accounts[0]});
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});

		assert.equal(addressqJzLSn3, 0xeBBc1A6BE6E0d54729c738653f2BED58eBaA0D59)
		assert.equal(boolQ3UkXR2, false)
		assert.equal(boolj7l75vz, true)
		assert.equal(uint256G3Ld6ZC, BigInt("285"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uintS073Eoy = BigInt("52")
		const addressFv7190L = accounts[0]
		const stringj8xTkxr = await AntiBaseProtocolf0cdjQc.name.call({from: accounts[4]});
		const booltlgG7En = await AntiBaseProtocolf0cdjQc.transfer.call(addressFv7190L, uintS073Eoy, {from: accounts[1]});
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});

		assert.equal(stringj8xTkxr, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolf0cdjQc.transfer.call(addressFv7190L, uintS073Eoy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uintyOWTqJk = BigInt("469")
		const uintFVvxMe8 = BigInt("1471")
		const addressChO7sjc = accounts[2]
		const uintY7jaKyc = BigInt("152")
		const uint256OlgvDQ = await AntiBaseProtocolf0cdjQc.findBurnFee.call(uintyOWTqJk, {from: accounts[4]});
		const addressnJfeSo2 = await AntiBaseProtocolf0cdjQc.burnFrom.call(addressChO7sjc, uintFVvxMe8, {from: accounts[2]});
		const uint256Tiqnhrq = await AntiBaseProtocolf0cdjQc.burn.call(uintY7jaKyc, {from: accounts[5]});
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});

		assert.equal(uint256OlgvDQ, BigInt("75"))
		await expect(AntiBaseProtocolf0cdjQc.burnFrom.call(addressChO7sjc, uintFVvxMe8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolf0cdjQc = await AntiBaseProtocol.new({from: accounts[2]});
		const uint3C1YCj = BigInt("1025")
		const addresswsAghtG = accounts[0]
		const uintI3H62t = BigInt("387")
		const addressrbIjLFA = accounts[3]
		const addresskWGOnKQ = accounts[2]
		const boolv0Jdc2F = await AntiBaseProtocolf0cdjQc.increaseAllowance.call(addresswsAghtG, uint3C1YCj, {from: accounts[0]});
		const boolKt0GGAx = await AntiBaseProtocolf0cdjQc.transferFrom.call(addresskWGOnKQ, addressrbIjLFA, uintI3H62t, {from: accounts[5]});
		const boolQ3UkXR2 = await AntiBaseProtocolf0cdjQc.isOwner.call({from: accounts[1]});

		assert.equal(boolv0Jdc2F, true)
		await expect(AntiBaseProtocolf0cdjQc.transferFrom.call(addresskWGOnKQ, addressrbIjLFA, uintI3H62t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb9wNLFK = await AntiBaseProtocol.new({from: accounts[2]});
		const uintr65dsNW = BigInt("326")
		const uintTYCOVN2 = BigInt("1838")
		const addressaMp3Skl = accounts[0]
		const addressuYIYIb1 = accounts[0]
		const addresspi7YeXf = accounts[3]
		const addressS0HKYNr = accounts[2]
		const uintfsd76SY = BigInt("1532")
		const uint256SzF6zTt = await AntiBaseProtocolb9wNLFK.burn.call(uintr65dsNW, {from: accounts[3]});
		const booliH1uwem = await AntiBaseProtocolb9wNLFK.transferFrom.call(addressuYIYIb1, addressaMp3Skl, uintTYCOVN2, {from: accounts[1]});
		const uint256o9iiR2j = await AntiBaseProtocolb9wNLFK.allowance.call(addressS0HKYNr, addresspi7YeXf, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Z3mLZQD = await AntiBaseProtocolb9wNLFK.findBurnFee.call(uintfsd76SY, {from: accounts[4]});

		await expect(AntiBaseProtocolb9wNLFK.burn.call(uintr65dsNW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb9wNLFK = await AntiBaseProtocol.new({from: accounts[2]});
		const addressvPHAoHI = accounts[3]
		const addressaeYaS0v = accounts[2]
		const addressJGNN1L = accounts[4]
		const addressQdAu5pF = accounts[3]
		const uintyrbrAHO = BigInt("1675")
		const addressa09Cvfy = accounts[1]
		const addressdim3dPj = accounts[3]
		const uint256o9iiR2j = await AntiBaseProtocolb9wNLFK.allowance.call(addressaeYaS0v, addressvPHAoHI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256rdA67XB = await AntiBaseProtocolb9wNLFK.balanceOf.call(addressJGNN1L, {from: accounts[4]});
		const addressXWC0WO7 = await AntiBaseProtocolb9wNLFK.transferOwnership.call(addressQdAu5pF, {from: accounts[2]});
		const addressTQdPz4R = await AntiBaseProtocolb9wNLFK.owner.call({from: accounts[2]});
		const addressE0Scu15 = await AntiBaseProtocolb9wNLFK._approve.call(addressdim3dPj, addressa09Cvfy, uintyrbrAHO, {from: accounts[3]});

		assert.equal(addressTQdPz4R, 0xeBBc1A6BE6E0d54729c738653f2BED58eBaA0D59)
		assert.equal(uint256o9iiR2j, BigInt("0"))
		assert.equal(uint256rdA67XB, BigInt("0"))
		await expect(AntiBaseProtocolb9wNLFK._approve.call(addressdim3dPj, addressa09Cvfy, uintyrbrAHO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolb9wNLFK = await AntiBaseProtocol.new({from: accounts[2]});
		const uintwsUSyuI = BigInt("178")
		await AntiBaseProtocolb9wNLFK.renounceOwnership.call({from: accounts[2]});
		const addressJZYt8X = await AntiBaseProtocolb9wNLFK.owner.call({from: accounts[2]});
		const uint256LgwzWyn = await AntiBaseProtocolb9wNLFK.findRewardFee.call(uintwsUSyuI, {from: accounts[0]});

		await expect(AntiBaseProtocolb9wNLFK.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})