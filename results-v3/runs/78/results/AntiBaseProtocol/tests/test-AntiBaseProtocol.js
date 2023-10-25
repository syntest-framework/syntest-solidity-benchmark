const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringc4Viox8 = "9n6JwlN4ZHCrXaXLzGB7a64zm2fsw8eHQ0YTWeIpqmfvRU5EAqARUMn7yJFjbCe81dNgoUHpW2b9qJ19pMqQ0LgfAkBQLYw3"
		const stringt5AfFv1 = "dcG1O5cdsOacOHE"
		const uintY63MPh = BigInt("168")
		const AntiBaseProtocolZOazFnz = await AntiBaseProtocol.new(stringc4Viox8, stringt5AfFv1, uintY63MPh, {from: accounts[2]});
		const addressjJcYBDg = accounts[4]
		const uintwf4j09g = BigInt("1747")
		const uintrYqkfZ = BigInt("1970")
		const uint256zMiyL8c = await AntiBaseProtocolZOazFnz.balanceOf.call(addressjJcYBDg, {from: accounts[4]});
		const stringOOxyLrB = await AntiBaseProtocolZOazFnz.symbol.call({from: accounts[2]});
		const addressHeon70k = await AntiBaseProtocolZOazFnz.owner.call({from: accounts[2]});
		const uint256P207Tv8 = await AntiBaseProtocolZOazFnz.burn.call(uintwf4j09g, {from: accounts[1]});
		const uint2564LwUTK = await AntiBaseProtocolZOazFnz.findRewardFee.call(uintrYqkfZ, {from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolC5WmdLe = await AntiBaseProtocol.new({from: accounts[0]});
		const addressKt23nBT = "0x0000000000000000000000000000000000000001"
		const addressxQUMWxE = accounts[1]
		const uintJjSMATW = BigInt("1481")
		const addressM5F13gL = accounts[2]
		const uintpSZfyEr = BigInt("1848")
		const uint256VozYKlS = await AntiBaseProtocolC5WmdLe.allowance.call(addressxQUMWxE, addressKt23nBT, {from: accounts[0]});
		const addressilnbG4b = await AntiBaseProtocolC5WmdLe._mint.call(addressM5F13gL, uintJjSMATW, {from: accounts[2]});
		const uint256voUzn8e = await AntiBaseProtocolC5WmdLe.findBurnFee.call(uintpSZfyEr, {from: accounts[2]});
		const stringgrU2brl = await AntiBaseProtocolC5WmdLe.name.call({from: accounts[3]});

		assert.equal(uint256VozYKlS, BigInt("0"))
		await expect(AntiBaseProtocolC5WmdLe._mint.call(addressM5F13gL, uintJjSMATW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolg98rjrG = await AntiBaseProtocol.new({from: accounts[4]});
		const uintcj1jBWI = BigInt("966")
		const addresssJmV8xO = accounts[3]
		const addressp3mZ3uz = accounts[5]
		const addressvmyVhkf = accounts[4]
		const uintRoVudZ4 = BigInt("524")
		const addressoxtpvvq = accounts[3]
		const addressVJbzMPm = accounts[1]
		const stringCs3Y8M = await AntiBaseProtocolg98rjrG.name.call({from: accounts[3]});
		const addressAizY8kO = await AntiBaseProtocolg98rjrG.burnFrom.call(addresssJmV8xO, uintcj1jBWI, {from: accounts[0]});
		const uint256d3lhBkM = await AntiBaseProtocolg98rjrG.allowance.call(addressvmyVhkf, addressp3mZ3uz, {from: accounts[0]});
		const boollNZUzs3 = await AntiBaseProtocolg98rjrG.increaseAllowance.call(addressoxtpvvq, uintRoVudZ4, {from: "0x0000000000000000000000000000000000000001"});
		const addressTvNf2RI = await AntiBaseProtocolg98rjrG._transferOwnership.call(addressVJbzMPm, {from: accounts[0]});

		assert.equal(stringCs3Y8M, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolg98rjrG.burnFrom.call(addresssJmV8xO, uintcj1jBWI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolKPeuw7r = await AntiBaseProtocol.new({from: accounts[3]});
		const uintoANCI6N = BigInt("1979")
		const addressykZdQgX = accounts[1]
		const uintPqWNehs = BigInt("156")
		const addressRkiPYX = accounts[3]
		await AntiBaseProtocolKPeuw7r.renounceOwnership.call({from: accounts[2]});
		const addressEhXo6rE = await AntiBaseProtocolKPeuw7r.burnFrom.call(addressykZdQgX, uintoANCI6N, {from: "0x0000000000000000000000000000000000000001"});
		const addressPt1t4da = await AntiBaseProtocolKPeuw7r.burnFrom.call(addressRkiPYX, uintPqWNehs, {from: accounts[0]});
		await AntiBaseProtocolKPeuw7r.requestGas.call({from: accounts[0]});
		await AntiBaseProtocolKPeuw7r.onlyOwner.call({from: accounts[0]});

		await expect(AntiBaseProtocolKPeuw7r.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolO16WOtq = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uintaWS20kj = BigInt("1441")
		const addressgjah2wI = accounts[3]
		const uint256wqxMMHN = await AntiBaseProtocolO16WOtq.findRewardFee.call(uintaWS20kj, {from: accounts[2]});
		const address38LVZQ = await AntiBaseProtocolO16WOtq._transferOwnership.call(addressgjah2wI, {from: accounts[4]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintohUeFbV = BigInt("859")
		const uintT1gqDdn = BigInt("1701")
		const addressGoPc0IE = accounts[0]
		const stringt8CpULu = await AntiBaseProtocollG20bNW.name.call({from: accounts[4]});
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintohUeFbV, {from: accounts[5]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintT1gqDdn, {from: accounts[4]});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressGoPc0IE, {from: accounts[4]});

		assert.equal(stringt8CpULu, "https://t.me/antibaseprotocol")
		assert.equal(uint256Dp5mUpy, BigInt("45"))
		assert.equal(uint256nP9spMs, BigInt("270"))
		await expect(AntiBaseProtocollG20bNW._transferOwnership.call(addressGoPc0IE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintBMuvPq4 = BigInt("1981")
		const addresseoSRKz3 = accounts[0]
		const uintf2KWeN = BigInt("888")
		const uintIn1sIsL = BigInt("1701")
		const addressW0O70KZ = accounts[0]
		const stringt8CpULu = await AntiBaseProtocollG20bNW.name.call({from: accounts[4]});
		const boolnOImVyt = await AntiBaseProtocollG20bNW.approve.call(addresseoSRKz3, uintBMuvPq4, {from: accounts[4]});
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintf2KWeN, {from: accounts[5]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintIn1sIsL, {from: accounts[4]});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressW0O70KZ, {from: accounts[4]});
		const stringPcKqABX = await AntiBaseProtocollG20bNW.symbol.call({from: accounts[3]});

		assert.equal(boolnOImVyt, true)
		assert.equal(stringt8CpULu, "https://t.me/antibaseprotocol")
		assert.equal(uint256Dp5mUpy, BigInt("45"))
		assert.equal(uint256nP9spMs, BigInt("270"))
		await expect(AntiBaseProtocollG20bNW._transferOwnership.call(addressW0O70KZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintAVKYAKm = BigInt("859")
		const uintXeRNZBN = BigInt("763")
		const addressDAtQev = accounts[0]
		const addressyTyBtsS = accounts[0]
		const uintdHIEjKZ = BigInt("1701")
		const addressms1t2Bv = accounts[1]
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintAVKYAKm, {from: accounts[5]});
		const boolMcFZGdV = await AntiBaseProtocollG20bNW.transferFrom.call(addressyTyBtsS, addressDAtQev, uintXeRNZBN, {from: accounts[1]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintdHIEjKZ, {from: accounts[4]});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressms1t2Bv, {from: accounts[4]});

		assert.equal(uint256Dp5mUpy, BigInt("45"))
		await expect(AntiBaseProtocollG20bNW.transferFrom.call(addressyTyBtsS, addressDAtQev, uintXeRNZBN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintxySXWJ = BigInt("1673")
		const uintjsqYEE2 = BigInt("859")
		const uintyAMdVPL = BigInt("1231")
		const addressHSszNDF = "0x0000000000000000000000000000000000000001"
		const uintapNnbUY = BigInt("1701")
		const uintv9z0Erd = BigInt("993")
		const addressTaTezQT = accounts[1]
		const addressE1Mp1IV = accounts[1]
		const uint256sLr1qTf = await AntiBaseProtocollG20bNW.burn.call(uintxySXWJ, {from: accounts[2]});
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintjsqYEE2, {from: accounts[5]});
		const bool2SFgSr = await AntiBaseProtocollG20bNW.approve.call(addressHSszNDF, uintyAMdVPL, {from: accounts[3]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintapNnbUY, {from: accounts[4]});
		const boolBn4DYK4 = await AntiBaseProtocollG20bNW.transfer.call(addressTaTezQT, uintv9z0Erd, {from: "0x0000000000000000000000000000000000000001"});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressE1Mp1IV, {from: accounts[4]});

		assert.equal(bool2SFgSr, true)
		assert.equal(uint256Dp5mUpy, BigInt("45"))
		assert.equal(uint256nP9spMs, BigInt("270"))
		await expect(AntiBaseProtocollG20bNW.transfer.call(addressTaTezQT, uintv9z0Erd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintPcZgztB = BigInt("1309")
		const addressjs999qp = accounts[4]
		const uintPJ6PBj6 = BigInt("854")
		const uintNBIWExi = BigInt("1701")
		const uintlli7Iu = BigInt("752")
		const addressNIkrEEd = accounts[0]
		const uintcKtcwYT = BigInt("1887")
		const addressup6ZZrS = accounts[0]
		const bool4n7azL = await AntiBaseProtocollG20bNW.increaseAllowance.call(addressjs999qp, uintPcZgztB, {from: accounts[0]});
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintPJ6PBj6, {from: accounts[5]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintNBIWExi, {from: accounts[4]});
		const addressL0PaJ8 = await AntiBaseProtocollG20bNW._burn.call(addressNIkrEEd, uintlli7Iu, {from: accounts[3]});
		const uint256L5sSPy = await AntiBaseProtocollG20bNW.findBurnFee.call(uintcKtcwYT, {from: accounts[0]});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressup6ZZrS, {from: accounts[4]});

		assert.equal(bool4n7azL, true)
		assert.equal(uint256Dp5mUpy, BigInt("45"))
		assert.equal(uint256nP9spMs, BigInt("270"))
		await expect(AntiBaseProtocollG20bNW._burn.call(addressNIkrEEd, uintlli7Iu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintyPtC3TV = BigInt("859")
		const uintlTdqoC2 = BigInt("242")
		const addressZfyHu72 = accounts[0]
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintyPtC3TV, {from: accounts[5]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintlTdqoC2, {from: accounts[4]});
		const addressqluWevt = await AntiBaseProtocollG20bNW.owner.call({from: accounts[0]});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressZfyHu72, {from: accounts[4]});

		assert.equal(addressqluWevt, 0x2fEee4526e91190Dd936f451B337aC2415f049A1)
		assert.equal(uint256Dp5mUpy, BigInt("45"))
		assert.equal(uint256nP9spMs, BigInt("45"))
		await expect(AntiBaseProtocollG20bNW._transferOwnership.call(addressZfyHu72, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintLAF0APN = BigInt("859")
		const uintdhu8Iqf = BigInt("461")
		const uint2bATzb = BigInt("1706")
		const uintWzmEbdA = BigInt("1842")
		const addressQbZ1G4V = accounts[1]
		const addressBapHwpf = accounts[0]
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintLAF0APN, {from: accounts[5]});
		const uint256YZMMAPz = await AntiBaseProtocollG20bNW.findBurnFee.call(uintdhu8Iqf, {from: accounts[3]});
		const uint86dCEPy = await AntiBaseProtocollG20bNW.decimals.call({from: accounts[2]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uint2bATzb, {from: accounts[4]});
		const addressigqmJfw = await AntiBaseProtocollG20bNW._burn.call(addressQbZ1G4V, uintWzmEbdA, {from: "0x0000000000000000000000000000000000000001"});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressBapHwpf, {from: accounts[4]});

		assert.equal(uint256Dp5mUpy, BigInt("45"))
		assert.equal(uint256YZMMAPz, BigInt("75"))
		assert.equal(uint256nP9spMs, BigInt("270"))
		assert.equal(uint86dCEPy, BigInt("18"))
		await expect(AntiBaseProtocollG20bNW._burn.call(addressQbZ1G4V, uintWzmEbdA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintVlw02kR = BigInt("859")
		const uintWEeXBfi = BigInt("242")
		const addressEuE1bJP = accounts[0]
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintVlw02kR, {from: accounts[5]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintWEeXBfi, {from: accounts[4]});
		const addressqluWevt = await AntiBaseProtocollG20bNW.owner.call({from: accounts[0]});
		const stringUnrxKQ = await AntiBaseProtocollG20bNW.symbol.call({from: accounts[5]});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressEuE1bJP, {from: accounts[4]});

		assert.equal(addressqluWevt, 0x2fEee4526e91190Dd936f451B337aC2415f049A1)
		assert.equal(stringUnrxKQ, "ABASE")
		assert.equal(uint256Dp5mUpy, BigInt("45"))
		assert.equal(uint256nP9spMs, BigInt("45"))
		await expect(AntiBaseProtocollG20bNW._transferOwnership.call(addressEuE1bJP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintboal0cd = BigInt("354")
		const uintkKnUR1i = BigInt("242")
		const uintEndAeyh = BigInt("1525")
		const addressZ2HaFJ7 = accounts[0]
		const addressppPXrWm = accounts[0]
		const uint256Dp5mUpy = await AntiBaseProtocollG20bNW.findRewardFee.call(uintboal0cd, {from: accounts[5]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintkKnUR1i, {from: accounts[4]});
		const boolSPC5nqw = await AntiBaseProtocollG20bNW.decreaseAllowance.call(addressZ2HaFJ7, uintEndAeyh, {from: accounts[5]});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addressppPXrWm, {from: accounts[4]});

		assert.equal(uint256Dp5mUpy, BigInt("20"))
		assert.equal(uint256nP9spMs, BigInt("45"))
		await expect(AntiBaseProtocollG20bNW.decreaseAllowance.call(addressZ2HaFJ7, uintEndAeyh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintzFoNtj = BigInt("465")
		const addressX0nHRml = accounts[3]
		const addresswUwSZ1C = accounts[1]
		const uint256IKjoONK = await AntiBaseProtocollG20bNW.findRewardFee.call(uintzFoNtj, {from: accounts[1]});
		const uint256J0wMdtu = await AntiBaseProtocollG20bNW.balanceOf.call(addressX0nHRml, {from: accounts[5]});
		const addressUaCuSxj = await AntiBaseProtocollG20bNW._transferOwnership.call(addresswUwSZ1C, {from: accounts[4]});

		assert.equal(uint256IKjoONK, BigInt("25"))
		assert.equal(uint256J0wMdtu, BigInt("0"))
		await expect(AntiBaseProtocollG20bNW._transferOwnership.call(addresswUwSZ1C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPf6Vpx7 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintlynBgm9 = BigInt("171")
		const addressEtzowo = accounts[1]
		const addresswtencrG = accounts[0]
		const uintkwnf62a = BigInt("346")
		const addressghBQyhg = accounts[4]
		const boolRz5cGGZ = await AntiBaseProtocolPf6Vpx7.transferFrom.call(addresswtencrG, addressEtzowo, uintlynBgm9, {from: accounts[5]});
		const booladQ7STr = await AntiBaseProtocolPf6Vpx7.approve.call(addressghBQyhg, uintkwnf62a, {from: accounts[4]});
		const stringtkwcig1 = await AntiBaseProtocolPf6Vpx7.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolPf6Vpx7.transferFrom.call(addresswtencrG, addressEtzowo, uintlynBgm9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uinttybHtqn = BigInt("422")
		const addresshhLdrpz = accounts[2]
		const uintoMHYcUq = BigInt("242")
		const uintM0cP3ui = BigInt("1603")
		const addressmag8ETx = await AntiBaseProtocollG20bNW.burnFrom.call(addresshhLdrpz, uinttybHtqn, {from: accounts[1]});
		await AntiBaseProtocollG20bNW.requestGas.call({from: accounts[5]});
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintoMHYcUq, {from: accounts[4]});
		const uint256Vh692ch = await AntiBaseProtocollG20bNW.findRewardFee.call(uintM0cP3ui, {from: accounts[0]});

		await expect(AntiBaseProtocollG20bNW.burnFrom.call(addresshhLdrpz, uinttybHtqn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocollG20bNW = await AntiBaseProtocol.new({from: accounts[2]});
		const uintqfzsXIK = BigInt("242")
		const uint256nP9spMs = await AntiBaseProtocollG20bNW.findBurnFee.call(uintqfzsXIK, {from: accounts[4]});
		const uint8fqavnz9 = await AntiBaseProtocollG20bNW.decimals.call({from: accounts[2]});
		const uint256jbT93W = await AntiBaseProtocollG20bNW.totalSupply.call({from: accounts[0]});

		assert.equal(uint256jbT93W, BigInt("31250000000000000000"))
		assert.equal(uint256nP9spMs, BigInt("45"))
		assert.equal(uint8fqavnz9, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPf6Vpx7 = await AntiBaseProtocol.new({from: accounts[0]});
		const addressWHTJxnf = accounts[4]
		const uintR9bItyp = BigInt("189")
		const addressQUOrIur = accounts[2]
		const addressYwj7RUe = accounts[0]
		const addressAp2m2dp = await AntiBaseProtocolPf6Vpx7.transferOwnership.call(addressWHTJxnf, {from: accounts[0]});
		const boolRz5cGGZ = await AntiBaseProtocolPf6Vpx7.transferFrom.call(addressYwj7RUe, addressQUOrIur, uintR9bItyp, {from: accounts[5]});

		await expect(AntiBaseProtocolPf6Vpx7.transferFrom.call(addressYwj7RUe, addressQUOrIur, uintR9bItyp, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPf6Vpx7 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintWY7PCXQ = BigInt("43")
		const uintiKXsTm = BigInt("1544")
		const addresscYHBjve = accounts[0]
		const uint256xjQC0pg = await AntiBaseProtocolPf6Vpx7.findRewardFee.call(uintWY7PCXQ, {from: accounts[0]});
		await AntiBaseProtocolPf6Vpx7.renounceOwnership.call({from: accounts[0]});
		const boolDRpdMiF = await AntiBaseProtocolPf6Vpx7.transfer.call(addresscYHBjve, uintiKXsTm, {from: accounts[4]});

		assert.equal(uint256xjQC0pg, BigInt("5"))
		await expect(AntiBaseProtocolPf6Vpx7.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})