const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const stringlrz5QHa = "16OQdkN2xD8myz0EuUH6PW80mVwqj6lBB8ym2zc1RUNnNGs6yYm1qMedgr211LSbpcxJbhRGTHTdDfZ3thRACdD"
		const stringiA2RDe = "ZwEqwEKbGOR2Jlcet1eCHY"
		const uintoXmfTdP = BigInt("65")
		const TPAqYFfhw = await TPA.new(stringlrz5QHa, stringiA2RDe, uintoXmfTdP, {from: accounts[1]});
		const addressIUjOPf0 = accounts[4]
		const addressz4rlFS5 = accounts[3]
		const uintvebm5Qa = BigInt("405")
		const addressVAY5gRJ = accounts[4]
		const uintLG8MyZz = BigInt("1903")
		const addressdSKO018 = accounts[3]
		const uintex9q1NI = BigInt("530")
		const addressCS2OGC5 = accounts[0]
		const uintGemSnj8 = BigInt("827")
		const addressgWccgNz = accounts[1]
		const uint256BaUngCy = await TPAqYFfhw.allowance.call(addressz4rlFS5, addressIUjOPf0, {from: accounts[2]});
		await TPAqYFfhw.whenNotPaused.call({from: accounts[4]});
		const booldIIBTXR = await TPAqYFfhw.unlock.call(addressVAY5gRJ, uintvebm5Qa, {from: accounts[1]});
		const boolWUcCFjC = await TPAqYFfhw.transfer.call(addressdSKO018, uintLG8MyZz, {from: accounts[2]});
		const boolwyCAfJN = await TPAqYFfhw.transfer.call(addressCS2OGC5, uintex9q1NI, {from: "0x0000000000000000000000000000000000000001"});
		const boolnnaNq91 = await TPAqYFfhw.decreaseAllowance.call(addressgWccgNz, uintGemSnj8, {from: accounts[0]});
	});

	it('test for TPA', async () => {
		const TPAxbHzGfS = await TPA.new({from: accounts[1]});
		const addresslfG5Hp = accounts[3]
		const uintUsofXMM = BigInt("820")
		const addressXTmvVhS = accounts[0]
		await TPAxbHzGfS.pause.call({from: accounts[3]});
		const uint256KxwlGi = await TPAxbHzGfS.balanceOf.call(addresslfG5Hp, {from: accounts[3]});
		await TPAxbHzGfS.pause.call({from: accounts[3]});
		await TPAxbHzGfS.unpause.call({from: accounts[3]});
		const booltHBMGMc = await TPAxbHzGfS.unlock.call(addressXTmvVhS, uintUsofXMM, {from: accounts[4]});

		await expect(TPAxbHzGfS.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAHc7jYBb = await TPA.new({from: accounts[3]});
		const addressbRHRr9L = accounts[2]
		const addressvoMakte = accounts[3]
		const uintBuxM7hO = BigInt("1141")
		const addressATkari6 = accounts[0]
		const uint256iPwQMo = await TPAHc7jYBb.allowance.call(addressvoMakte, addressbRHRr9L, {from: accounts[5]});
		const addressgyusNwT = await TPAHc7jYBb.burnFrom.call(addressATkari6, uintBuxM7hO, {from: accounts[2]});

		assert.equal(uint256iPwQMo, BigInt("0"))
		await expect(TPAHc7jYBb.burnFrom.call(addressATkari6, uintBuxM7hO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintxgEZY1t = BigInt("1933")
		const addressG1R0pN = accounts[2]
		const addresselfEhOd = accounts[3]
		const uintMXkOcxi = BigInt("1127")
		const addressf6JEv0s = accounts[5]
		const booleNlfGwr = await TPAyuPnKVa.approve.call(addressG1R0pN, uintxgEZY1t, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addresselfEhOd, {from: accounts[4]});
		const uint256SCz49zW = await TPAyuPnKVa.burn.call(uintMXkOcxi, {from: accounts[2]});
		const uint256lBgK3Nr = await TPAyuPnKVa.balanceOf.call(addressf6JEv0s, {from: accounts[1]});

		assert.equal(booleNlfGwr, true)
		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.burn.call(uintMXkOcxi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintQmyGP2P = BigInt("1933")
		const addressR7ZUAkO = accounts[2]
		const addressQ0kEpO = accounts[4]
		const uintenGbbtw = BigInt("358")
		const addressfdSvbaQ = accounts[4]
		const uintpcMWdOZ = BigInt("421")
		const addressNYuQH5S = accounts[3]
		const addressZhggFmN = accounts[5]
		const booleNlfGwr = await TPAyuPnKVa.approve.call(addressR7ZUAkO, uintQmyGP2P, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressQ0kEpO, {from: accounts[4]});
		const boolADB0lJ2 = await TPAyuPnKVa.increaseAllowance.call(addressfdSvbaQ, uintenGbbtw, {from: accounts[0]});
		const boolj3cNn3I = await TPAyuPnKVa.unlock.call(addressNYuQH5S, uintpcMWdOZ, {from: accounts[4]});
		const uint256lBgK3Nr = await TPAyuPnKVa.balanceOf.call(addressZhggFmN, {from: accounts[1]});

		assert.equal(boolADB0lJ2, true)
		assert.equal(booleNlfGwr, true)
		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.unlock.call(addressNYuQH5S, uintpcMWdOZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintgYQXKrh = BigInt("1936")
		const addressxCJBPs8 = accounts[2]
		const addressqmlFqBp = accounts[3]
		const addressoIBS5i = accounts[5]
		const booleNlfGwr = await TPAyuPnKVa.approve.call(addressxCJBPs8, uintgYQXKrh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressqmlFqBp, {from: accounts[4]});
		await TPAyuPnKVa.whenNotPaused.call({from: accounts[4]});
		const uint256lBgK3Nr = await TPAyuPnKVa.balanceOf.call(addressoIBS5i, {from: accounts[1]});

		assert.equal(booleNlfGwr, true)
		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintpA1t5vI = BigInt("1933")
		const address08yF4G = accounts[2]
		const addressHtNMHSI = accounts[3]
		const stringq2KO1J5 = await TPAyuPnKVa.name.call({from: accounts[4]});
		const booleNlfGwr = await TPAyuPnKVa.approve.call(address08yF4G, uintpA1t5vI, {from: "0x0000000000000000000000000000000000000001"});
		await TPAyuPnKVa.pause.call({from: accounts[2]});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressHtNMHSI, {from: accounts[4]});

		assert.equal(booleNlfGwr, true)
		assert.equal(stringq2KO1J5, "TPA")
		await expect(TPAyuPnKVa.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintOfKaPNX = BigInt("1933")
		const address67dhPi = accounts[3]
		const uintIEXLEvE = BigInt("1886")
		const address7mc61L = accounts[0]
		const booleNlfGwr = await TPAyuPnKVa.approve.call(address67dhPi, uintOfKaPNX, {from: "0x0000000000000000000000000000000000000001"});
		const boolUmYhDM0 = await TPAyuPnKVa.decreaseAllowance.call(address7mc61L, uintIEXLEvE, {from: accounts[3]});

		assert.equal(booleNlfGwr, true)
		await expect(TPAyuPnKVa.decreaseAllowance.call(address7mc61L, uintIEXLEvE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintJD8Qzpv = BigInt("1962")
		const addressr86C1BY = accounts[2]
		const uintUjgxlBG = BigInt("424")
		const addresspiMbIsF = accounts[3]
		const addressPRi0vRy = accounts[3]
		const booleNlfGwr = await TPAyuPnKVa.approve.call(addressr86C1BY, uintJD8Qzpv, {from: "0x0000000000000000000000000000000000000001"});
		const boolXlBRDq = await TPAyuPnKVa.transfer.call(addresspiMbIsF, uintUjgxlBG, {from: accounts[4]});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressPRi0vRy, {from: accounts[4]});

		assert.equal(booleNlfGwr, true)
		await expect(TPAyuPnKVa.transfer.call(addresspiMbIsF, uintUjgxlBG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintRlhdMmc = BigInt("1933")
		const addressFKX8JCr = accounts[2]
		const addressNtmf2WI = accounts[3]
		const booleNlfGwr = await TPAyuPnKVa.approve.call(addressFKX8JCr, uintRlhdMmc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressNtmf2WI, {from: accounts[4]});
		const uint256HRczNLS = await TPAyuPnKVa.totalSupply.call({from: accounts[4]});

		assert.equal(booleNlfGwr, true)
		assert.equal(uint256HRczNLS, BigInt("10000000000000000000000000000"))
		assert.equal(uint256RiUXkBs, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressX7DKu22 = accounts[5]
		await TPAyuPnKVa.pause.call({from: accounts[0]});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressX7DKu22, {from: accounts[4]});

		await expect(TPAyuPnKVa.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressIkn7TuW = accounts[4]
		await TPAyuPnKVa.renounceAdmin.call({from: accounts[1]});
		await TPAyuPnKVa.renounceAdmin.call({from: accounts[5]});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressIkn7TuW, {from: accounts[4]});
		await TPAyuPnKVa.whenPaused.call({from: accounts[1]});

		await expect(TPAyuPnKVa.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressP7kF97W = accounts[5]
		const uintRuwoop5 = BigInt("2021")
		const addressghx548x = accounts[5]
		const addressR003zAg = accounts[3]
		const addresser0fW6I = accounts[5]
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressP7kF97W, {from: accounts[4]});
		const boolQ9L6Lsv = await TPAyuPnKVa.transferFrom.call(addressR003zAg, addressghx548x, uintRuwoop5, {from: accounts[4]});
		const boolUGqXW4g = await TPAyuPnKVa.unfreezeAccount.call(addresser0fW6I, {from: accounts[2]});

		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.transferFrom.call(addressR003zAg, addressghx548x, uintRuwoop5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintgb6aATz = BigInt("1660")
		const addressywySmLK = accounts[3]
		const addressmKB5hQ9 = accounts[5]
		const uintqVjqoUR = BigInt("2021")
		const addressmOQCWKP = accounts[6]
		const addressZTyGtzy = accounts[3]
		const addressI1tOaT6 = accounts[5]
		const boolwE5UK0 = await TPAyuPnKVa.unlock.call(addressywySmLK, uintgb6aATz, {from: accounts[0]});
		await TPAyuPnKVa.pause.call({from: accounts[1]});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressmKB5hQ9, {from: accounts[4]});
		const boolQ9L6Lsv = await TPAyuPnKVa.transferFrom.call(addressZTyGtzy, addressmOQCWKP, uintqVjqoUR, {from: accounts[4]});
		const boolUGqXW4g = await TPAyuPnKVa.unfreezeAccount.call(addressI1tOaT6, {from: accounts[2]});

		await expect(TPAyuPnKVa.unlock.call(addressywySmLK, uintgb6aATz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressuMuarp8 = accounts[0]
		const uintsn487Sg = BigInt("446")
		const addresseN8LWMb = accounts[3]
		const addressw2AeJdC = accounts[3]
		const booll1G8MHK = await TPAyuPnKVa.isOwner.call(addressuMuarp8, {from: accounts[0]});
		const boolXlBRDq = await TPAyuPnKVa.transfer.call(addresseN8LWMb, uintsn487Sg, {from: accounts[4]});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressw2AeJdC, {from: accounts[4]});

		assert.equal(booll1G8MHK, true)
		await expect(TPAyuPnKVa.transfer.call(addresseN8LWMb, uintsn487Sg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addresssKB41nb = accounts[4]
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addresssKB41nb, {from: accounts[4]});
		const uint8OdXAEKA = await TPAyuPnKVa.decimals.call({from: accounts[0]});

		assert.equal(uint256RiUXkBs, BigInt("0"))
		assert.equal(uint8OdXAEKA, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPAK9cx17Q = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintYdRrofx = BigInt("2028")
		const addressaDDIiP = accounts[3]
		const addressrUKBdi9 = "0x0000000000000000000000000000000000000001"
		await TPAK9cx17Q.renounceAdmin.call({from: accounts[2]});
		const booltyS49BL = await TPAK9cx17Q.paused.call({from: accounts[1]});
		await TPAK9cx17Q.whenNotPaused.call({from: accounts[2]});
		const boolxdfSIJ5 = await TPAK9cx17Q.transferFrom.call(addressrUKBdi9, addressaDDIiP, uintYdRrofx, {from: accounts[1]});
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addresseaxtyHA = accounts[5]
		const addressX9K5DCj = accounts[5]
		const uintPUQ2812 = BigInt("257")
		const addressm3QJESW = accounts[1]
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addresseaxtyHA, {from: accounts[4]});
		const addressTzDHvQn = await TPAyuPnKVa.transferOwnership.call(addressX9K5DCj, {from: accounts[0]});
		const boolUbyzDx = await TPAyuPnKVa.approve.call(addressm3QJESW, uintPUQ2812, {from: accounts[4]});
		await TPAyuPnKVa.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUbyzDx, true)
		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.whenPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressheBzB3e = accounts[5]
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressheBzB3e, {from: accounts[4]});
		const uint256PEcxvr = await TPAyuPnKVa.totalSupply.call({from: accounts[5]});
		const stringfqajqyJ = await TPAyuPnKVa.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringfqajqyJ, "TPA")
		assert.equal(uint256PEcxvr, BigInt("10000000000000000000000000000"))
		assert.equal(uint256RiUXkBs, BigInt("0"))
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressuODonQv = accounts[5]
		const uintg0Ph3vi = BigInt("1479")
		const addressemoCcJG = accounts[0]
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressuODonQv, {from: accounts[4]});
		const boolVn2cDdS = await TPAyuPnKVa.paused.call({from: accounts[0]});
		const boolMBIFB2 = await TPAyuPnKVa.transfer.call(addressemoCcJG, uintg0Ph3vi, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVn2cDdS, false)
		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.transfer.call(addressemoCcJG, uintg0Ph3vi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressBKUhALe = accounts[5]
		const addresslJXlYwe = accounts[5]
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressBKUhALe, {from: accounts[4]});
		const stringoizwnHg = await TPAyuPnKVa.symbol.call({from: accounts[3]});
		const boolPEBc1af = await TPAyuPnKVa.unfreezeAccount.call(addresslJXlYwe, {from: accounts[0]});

		assert.equal(stringoizwnHg, "TPA")
		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.unfreezeAccount.call(addresslJXlYwe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressBgrSIpd = accounts[6]
		const addresshBhcyLg = accounts[2]
		const uintIXChixd = BigInt("1467")
		const addressPar6jUq = accounts[4]
		const addressAQXp5ND = accounts[2]
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressBgrSIpd, {from: accounts[4]});
		const addressBnnOR2 = await TPAyuPnKVa.upgradeTo.call(addresshBhcyLg, {from: accounts[0]});
		const boolMp4qMHn = await TPAyuPnKVa.transferFrom.call(addressAQXp5ND, addressPar6jUq, uintIXChixd, {from: accounts[3]});

		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.transferFrom.call(addressAQXp5ND, addressPar6jUq, uintIXChixd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addressWq4p0D8 = accounts[5]
		const addressCX9p5y6 = accounts[5]
		const addressuebC1f1 = await TPAyuPnKVa.removeAdmin.call(addressWq4p0D8, {from: accounts[0]});
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addressCX9p5y6, {from: accounts[4]});

		await expect(TPAyuPnKVa.removeAdmin.call(addressWq4p0D8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const addresssCkzBi = accounts[6]
		const addressEoMSGrJ = accounts[1]
		const addressHjsxVkE = accounts[4]
		const uint256RiUXkBs = await TPAyuPnKVa.balanceOf.call(addresssCkzBi, {from: accounts[4]});
		const booljQHyi7i = await TPAyuPnKVa.isAdmin.call(addressEoMSGrJ, {from: accounts[3]});
		await TPAyuPnKVa.renounceAdmin.call({from: accounts[0]});
		const boolIM6wpnR = await TPAyuPnKVa.isAdmin.call(addressHjsxVkE, {from: accounts[3]});

		assert.equal(booljQHyi7i, false)
		assert.equal(uint256RiUXkBs, BigInt("0"))
		await expect(TPAyuPnKVa.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAyuPnKVa = await TPA.new({from: accounts[0]});
		const uintkyN4PPU = BigInt("456")
		const uintqRwLXSQ = BigInt("165")
		const addressljNc7Xz = accounts[4]
		const uintr6wWEPA = BigInt("1746")
		const addressNyM3JO8 = accounts[0]
		const uintinchoIn = BigInt("2021")
		const addressi2I9BLG = accounts[7]
		const addressADzBB47 = accounts[3]
		const boolO7se6zs = await TPAyuPnKVa.transferWithLock.call(addressljNc7Xz, uintqRwLXSQ, uintkyN4PPU, {from: accounts[0]});
		const addressz8iydEJ = await TPAyuPnKVa.burnFrom.call(addressNyM3JO8, uintr6wWEPA, {from: accounts[2]});
		const boolQ9L6Lsv = await TPAyuPnKVa.transferFrom.call(addressADzBB47, addressi2I9BLG, uintinchoIn, {from: accounts[4]});

		assert.equal(boolO7se6zs, true)
		await expect(TPAyuPnKVa.burnFrom.call(addressNyM3JO8, uintr6wWEPA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})