const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringtSBEqqv = "XVID0D6bdi77nKn5ty1uvjHqnmw6FmxFeYYotwTd5TSwMNGDjwmQrPX9SEcHylGW3u8cCCfs1zX20sLvHbVHqlmvMJfpbYrsMC"
		const stringoU4hrB = "CTqAeRaUlpgB16kxSWTjHqf"
		const uintKg3m2Xu = BigInt("68")
		const LUPyVg7eAc = await LUP.new(stringtSBEqqv, stringoU4hrB, uintKg3m2Xu, {from: "0x0000000000000000000000000000000000000001"});
		const uintSIDO0iI = BigInt("1844")
		const uintGHecJtN = BigInt("1683")
		const addressOXoGALO = accounts[1]
		const boolw9wGUa1 = true
		const addresseoEJ6E8 = accounts[4]
		const addressexThAmB = accounts[3]
		const booll0PFPdb = true
		const addressRQ4Aixk = accounts[4]
		const uintNj2j6Lv = BigInt("514")
		const uintd9mz2zA = BigInt("1372")
		const addressZzhchNU = "0x0000000000000000000000000000000000000001"
		const boolWBloqg3 = await LUPyVg7eAc.lock.call(addressOXoGALO, uintGHecJtN, uintSIDO0iI, {from: "0x0000000000000000000000000000000000000001"});
		const boolGx1b0al = await LUPyVg7eAc.freezeAccount.call(addresseoEJ6E8, boolw9wGUa1, {from: accounts[5]});
		const stringDfkNdMU = await LUPyVg7eAc.name.call({from: accounts[3]});
		const uint256vu9D33n = await LUPyVg7eAc.balanceOf.call(addressexThAmB, {from: accounts[5]});
		const booll23JgX9 = await LUPyVg7eAc.freezeAccount.call(addressRQ4Aixk, booll0PFPdb, {from: accounts[4]});
		const booltMmAE77 = await LUPyVg7eAc.transferWithLock.call(addressZzhchNU, uintd9mz2zA, uintNj2j6Lv, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPdF9ovx = await LUP.new({from: accounts[0]});
		const boolYEjLG0f = true
		const addressezDmMJj = accounts[4]
		const uintcjGHJN2 = BigInt("1951")
		const uintoKktSzI = BigInt("277")
		const addressaZpIvCj = accounts[3]
		const boolkyJ4CZ7 = await LUPdF9ovx.freezeAccount.call(addressezDmMJj, boolYEjLG0f, {from: accounts[1]});
		const boolHUkTZsf = await LUPdF9ovx.transferWithLock.call(addressaZpIvCj, uintoKktSzI, uintcjGHJN2, {from: accounts[0]});
		const uint8PL422c1 = await LUPdF9ovx.decimals.call({from: accounts[5]});
		const uint8ydhDKiU = await LUPdF9ovx.decimals.call({from: accounts[1]});
		const stringuIpS5cH = await LUPdF9ovx.name.call({from: accounts[1]});

		await expect(LUPdF9ovx.freezeAccount.call(addressezDmMJj, boolYEjLG0f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPLsl9GKZ = await LUP.new({from: accounts[1]});
		const uintVLBmjL9 = BigInt("979")
		const addressokpntwB = accounts[4]
		const boolnkDCC50 = true
		const addressq57F20Z = accounts[4]
		const stringnBdk6k4 = await LUPLsl9GKZ.symbol.call({from: accounts[1]});
		const stringgT3fit5 = await LUPLsl9GKZ.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolj9zps1P = await LUPLsl9GKZ.unlock.call(addressokpntwB, uintVLBmjL9, {from: accounts[5]});
		const uint8fgPhlcW = await LUPLsl9GKZ.decimals.call({from: accounts[2]});
		const boolr0ZxANv = await LUPLsl9GKZ.freezeAccount.call(addressq57F20Z, boolnkDCC50, {from: accounts[4]});

		assert.equal(stringgT3fit5, "LINKUP Token")
		assert.equal(stringnBdk6k4, "LUP")
		await expect(LUPLsl9GKZ.unlock.call(addressokpntwB, uintVLBmjL9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsoWsHqm = await LUP.new({from: accounts[5]});
		const addressF6WAKdk = accounts[2]
		const uintT2J5KAb = BigInt("1643")
		const uintT5Ci1ml = BigInt("720")
		const addressUq9tu0D = accounts[2]
		const uint8l7SYysd = await LUPsoWsHqm.decimals.call({from: accounts[2]});
		const uint256sUbvQy = await LUPsoWsHqm.balanceOf.call(addressF6WAKdk, {from: accounts[3]});
		const stringjrlYMJD = await LUPsoWsHqm.symbol.call({from: accounts[0]});
		const boolJGE9QHq = await LUPsoWsHqm.transferWithLock.call(addressUq9tu0D, uintT5Ci1ml, uintT2J5KAb, {from: accounts[5]});

		assert.equal(boolJGE9QHq, true)
		assert.equal(stringjrlYMJD, "LUP")
		assert.equal(uint256sUbvQy, BigInt("0"))
		assert.equal(uint8l7SYysd, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPD5b8ris = await LUP.new({from: accounts[1]});
		const uintImZies = BigInt("138")
		const uintBYDq8Hm = BigInt("1395")
		const addresslcuZKV = accounts[5]
		const uintwkO7ziA = BigInt("1587")
		const addressZXgswBU = accounts[4]
		const addressMtUPZMR = "0x0000000000000000000000000000000000000001"
		const uintNLNGmWI = BigInt("490")
		const addressfTV2z9Q = accounts[1]
		const uinttaXxAiE = BigInt("1651")
		const uintoVb4YOL = BigInt("521")
		const addressX40GzJd = accounts[3]
		const boolsbpsjaL = await LUPD5b8ris.lock.call(addresslcuZKV, uintBYDq8Hm, uintImZies, {from: accounts[1]});
		const boolXm8iwxQ = await LUPD5b8ris.unlock.call(addressZXgswBU, uintwkO7ziA, {from: accounts[0]});
		const addressvLW1lRP = await LUPD5b8ris.upgradeTo.call(addressMtUPZMR, {from: accounts[3]});
		const booli5M16lp = await LUPD5b8ris.transfer.call(addressfTV2z9Q, uintNLNGmWI, {from: accounts[4]});
		const stringFYtv0bR = await LUPD5b8ris.symbol.call({from: accounts[4]});
		const boolV3KXHbN = await LUPD5b8ris.lock.call(addressX40GzJd, uintoVb4YOL, uinttaXxAiE, {from: accounts[1]});

		await expect(LUPD5b8ris.lock.call(addresslcuZKV, uintBYDq8Hm, uintImZies, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsoWsHqm = await LUP.new({from: accounts[5]});
		const addressyh3Ew1z = accounts[0]
		const addresswCgqO2 = accounts[2]
		const addresskRMR64d = accounts[0]
		const uintjLWYdHD = BigInt("1643")
		const uintLfZmH81 = BigInt("720")
		const addressHr3ryE0 = accounts[3]
		const addressjVSvik5 = await LUPsoWsHqm.notFrozen.call(addressyh3Ew1z, {from: accounts[3]});
		const uint8l7SYysd = await LUPsoWsHqm.decimals.call({from: accounts[2]});
		const uint256sUbvQy = await LUPsoWsHqm.balanceOf.call(addresswCgqO2, {from: accounts[3]});
		const uint256oWD5Aql = await LUPsoWsHqm.balanceOf.call(addresskRMR64d, {from: accounts[1]});
		const boolJGE9QHq = await LUPsoWsHqm.transferWithLock.call(addressHr3ryE0, uintLfZmH81, uintjLWYdHD, {from: accounts[5]});

		await expect(LUPsoWsHqm.notFrozen.call(addressyh3Ew1z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsoWsHqm = await LUP.new({from: accounts[5]});
		const uintdaczRt = BigInt("685")
		const address3GcCWG = accounts[4]
		const addressjP6t1VF = accounts[2]
		const uintqIEd59c = BigInt("1643")
		const uintRTflyta = BigInt("714")
		const addressk8ewxDa = accounts[2]
		const uintnO3YeHU = BigInt("732")
		const uintSpsfbFw = BigInt("2033")
		const addressycor9Qm = accounts[4]
		const stringK8HtAU = await LUPsoWsHqm.symbol.call({from: accounts[0]});
		const uint8l7SYysd = await LUPsoWsHqm.decimals.call({from: accounts[2]});
		const boolRwVoZxY = await LUPsoWsHqm.transfer.call(address3GcCWG, uintdaczRt, {from: accounts[3]});
		const uint256sUbvQy = await LUPsoWsHqm.balanceOf.call(addressjP6t1VF, {from: accounts[3]});
		const boolJGE9QHq = await LUPsoWsHqm.transferWithLock.call(addressk8ewxDa, uintRTflyta, uintqIEd59c, {from: accounts[5]});
		const boolF0m6OoA = await LUPsoWsHqm.transferWithLock.call(addressycor9Qm, uintSpsfbFw, uintnO3YeHU, {from: accounts[5]});

		assert.equal(stringK8HtAU, "LUP")
		assert.equal(uint8l7SYysd, BigInt("18"))
		await expect(LUPsoWsHqm.transfer.call(address3GcCWG, uintdaczRt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsoWsHqm = await LUP.new({from: accounts[5]});
		const addressKCkCi4v = accounts[3]
		const addressjgQ5Kus = "0x0000000000000000000000000000000000000001"
		const uintRRTYmVq = BigInt("1643")
		const uintJm7ITLN = BigInt("720")
		const addresstOTYNHH = accounts[2]
		const uint8l7SYysd = await LUPsoWsHqm.decimals.call({from: accounts[2]});
		const uint256sUbvQy = await LUPsoWsHqm.balanceOf.call(addressKCkCi4v, {from: accounts[3]});
		const stringfsFhRo4 = await LUPsoWsHqm.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringjrlYMJD = await LUPsoWsHqm.symbol.call({from: accounts[0]});
		const addressNccJFS = await LUPsoWsHqm.upgradeTo.call(addressjgQ5Kus, {from: accounts[3]});
		const stringObLPTj9 = await LUPsoWsHqm.name.call({from: accounts[4]});
		const boolJGE9QHq = await LUPsoWsHqm.transferWithLock.call(addresstOTYNHH, uintJm7ITLN, uintRRTYmVq, {from: accounts[5]});

		assert.equal(stringfsFhRo4, "LUP")
		assert.equal(stringjrlYMJD, "LUP")
		assert.equal(uint256sUbvQy, BigInt("0"))
		assert.equal(uint8l7SYysd, BigInt("18"))
		await expect(LUPsoWsHqm.upgradeTo.call(addressjgQ5Kus, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsoWsHqm = await LUP.new({from: accounts[5]});
		const uintF20FeMP = BigInt("1385")
		const uintLkbK3l = BigInt("527")
		const addressiutTyUY = "0x0000000000000000000000000000000000000001"
		const addressofi7XkO = accounts[2]
		const boolASZcy9 = false
		const addressoxCPtqH = accounts[4]
		const uintYPxs8Jj = BigInt("1643")
		const uinth9Shw73 = BigInt("720")
		const addressDfOr5vW = accounts[2]
		const uintEbxlSgK = BigInt("1115")
		const address4CM2lL = accounts[4]
		const boolRZGQFN = await LUPsoWsHqm.transferWithLock.call(addressiutTyUY, uintLkbK3l, uintF20FeMP, {from: accounts[5]});
		const uint8l7SYysd = await LUPsoWsHqm.decimals.call({from: accounts[2]});
		const uint256sUbvQy = await LUPsoWsHqm.balanceOf.call(addressofi7XkO, {from: accounts[3]});
		const boolDDKBoxh = await LUPsoWsHqm.freezeAccount.call(addressoxCPtqH, boolASZcy9, {from: accounts[5]});
		const stringSf7DkQh = await LUPsoWsHqm.symbol.call({from: accounts[1]});
		const boolJGE9QHq = await LUPsoWsHqm.transferWithLock.call(addressDfOr5vW, uinth9Shw73, uintYPxs8Jj, {from: accounts[5]});
		const boolnpefZ5 = await LUPsoWsHqm.transfer.call(address4CM2lL, uintEbxlSgK, {from: accounts[4]});

		assert.equal(boolDDKBoxh, true)
		assert.equal(boolJGE9QHq, true)
		assert.equal(boolRZGQFN, true)
		assert.equal(stringSf7DkQh, "LUP")
		assert.equal(uint256sUbvQy, BigInt("0"))
		assert.equal(uint8l7SYysd, BigInt("18"))
		await expect(LUPsoWsHqm.transfer.call(address4CM2lL, uintEbxlSgK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsoWsHqm = await LUP.new({from: accounts[5]});
		const uintKPbmsCe = BigInt("1385")
		const uintojWIE7C = BigInt("527")
		const addressR2etHtU = "0x0000000000000000000000000000000000000001"
		const addressN05ozee = accounts[2]
		const boolASZcy9 = false
		const addressJGoaMk8 = accounts[5]
		const uintj7mc1I0 = BigInt("1202")
		const addressooQK349 = accounts[2]
		const uintJQ91M5t = BigInt("1643")
		const uinthBy6rLe = BigInt("720")
		const addressocwZ3GM = accounts[2]
		const uintfENvpyP = BigInt("807")
		const addressLMAWYh = "0x0000000000000000000000000000000000000001"
		const uintFw6VoP7 = BigInt("1115")
		const addressIw4D3hD = accounts[4]
		const boolRZGQFN = await LUPsoWsHqm.transferWithLock.call(addressR2etHtU, uintojWIE7C, uintKPbmsCe, {from: accounts[5]});
		const uint8l7SYysd = await LUPsoWsHqm.decimals.call({from: accounts[2]});
		const uint256sUbvQy = await LUPsoWsHqm.balanceOf.call(addressN05ozee, {from: accounts[3]});
		const boolDDKBoxh = await LUPsoWsHqm.freezeAccount.call(addressJGoaMk8, boolASZcy9, {from: accounts[5]});
		const stringSf7DkQh = await LUPsoWsHqm.symbol.call({from: accounts[1]});
		const boolVSgiw3L = await LUPsoWsHqm.unlock.call(addressooQK349, uintj7mc1I0, {from: accounts[5]});
		const boolJGE9QHq = await LUPsoWsHqm.transferWithLock.call(addressocwZ3GM, uinthBy6rLe, uintJQ91M5t, {from: accounts[5]});
		const boolKLL4cTM = await LUPsoWsHqm.transfer.call(addressLMAWYh, uintfENvpyP, {from: accounts[2]});
		const boolnpefZ5 = await LUPsoWsHqm.transfer.call(addressIw4D3hD, uintFw6VoP7, {from: accounts[4]});

		assert.equal(boolDDKBoxh, true)
		assert.equal(boolRZGQFN, true)
		assert.equal(stringSf7DkQh, "LUP")
		assert.equal(uint256sUbvQy, BigInt("0"))
		assert.equal(uint8l7SYysd, BigInt("18"))
		await expect(LUPsoWsHqm.unlock.call(addressooQK349, uintj7mc1I0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsfQ2qwR = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssLK9huT = accounts[4]
		const uintSwngkEP = BigInt("75")
		const uintEmjLuHO = BigInt("624")
		const addressHzbErC = accounts[3]
		const addressEp7622B = accounts[4]
		const boolQUebrFs = true
		const addressAd2MvZt = accounts[3]
		const uintZCzEJC2 = BigInt("442")
		const addressBcir657 = accounts[0]
		const addressaTh7fb = await LUPsfQ2qwR.notFrozen.call(addresssLK9huT, {from: accounts[1]});
		const boolBFN6jZR = await LUPsfQ2qwR.transferWithLock.call(addressHzbErC, uintEmjLuHO, uintSwngkEP, {from: accounts[4]});
		const uint8gk4eKmE = await LUPsfQ2qwR.decimals.call({from: accounts[3]});
		const addressT65wXuv = await LUPsfQ2qwR.upgradeTo.call(addressEp7622B, {from: accounts[2]});
		const boolvBVbsr7 = await LUPsfQ2qwR.freezeAccount.call(addressAd2MvZt, boolQUebrFs, {from: accounts[3]});
		const boolNK0Koyu = await LUPsfQ2qwR.transfer.call(addressBcir657, uintZCzEJC2, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for LUP', async () => {
		const LUPsoWsHqm = await LUP.new({from: accounts[5]});
		const addressAeZtVDk = "0x0000000000000000000000000000000000000001"
		const uintsGK73Sy = BigInt("1385")
		const uintlZMTgO0 = BigInt("527")
		const addresskdAz8D5 = "0x0000000000000000000000000000000000000001"
		const addressfJVfJCV = accounts[2]
		const boolASZcy9 = false
		const addressP5rypq4 = accounts[5]
		const uintCZVXER3 = BigInt("1643")
		const uintXJRe4j = BigInt("720")
		const addressia5XqS7 = accounts[2]
		const addressmEkmibH = accounts[2]
		const uintN4m132F = BigInt("1115")
		const addressCCoDQs = accounts[4]
		const uintVNYf08C = BigInt("1667")
		const uintiR3zsrA = BigInt("1655")
		const addresst7IPrq5 = accounts[1]
		const addressOdV5lG6 = await LUPsoWsHqm.upgradeTo.call(addressAeZtVDk, {from: accounts[5]});
		const boolRZGQFN = await LUPsoWsHqm.transferWithLock.call(addresskdAz8D5, uintlZMTgO0, uintsGK73Sy, {from: accounts[5]});
		const uint8l7SYysd = await LUPsoWsHqm.decimals.call({from: accounts[2]});
		const uint256sUbvQy = await LUPsoWsHqm.balanceOf.call(addressfJVfJCV, {from: accounts[3]});
		const boolDDKBoxh = await LUPsoWsHqm.freezeAccount.call(addressP5rypq4, boolASZcy9, {from: accounts[5]});
		const stringSf7DkQh = await LUPsoWsHqm.symbol.call({from: accounts[1]});
		const boolJGE9QHq = await LUPsoWsHqm.transferWithLock.call(addressia5XqS7, uintXJRe4j, uintCZVXER3, {from: accounts[5]});
		const addressvpAPrJr = await LUPsoWsHqm.notFrozen.call(addressmEkmibH, {from: accounts[5]});
		const boolnpefZ5 = await LUPsoWsHqm.transfer.call(addressCCoDQs, uintN4m132F, {from: accounts[4]});
		const boolZ5PeYGW = await LUPsoWsHqm.lock.call(addresst7IPrq5, uintiR3zsrA, uintVNYf08C, {from: accounts[3]});

		assert.equal(boolDDKBoxh, true)
		assert.equal(boolJGE9QHq, true)
		assert.equal(boolRZGQFN, true)
		assert.equal(stringSf7DkQh, "LUP")
		assert.equal(uint256sUbvQy, BigInt("0"))
		assert.equal(uint8l7SYysd, BigInt("18"))
		await expect(LUPsoWsHqm.notFrozen.call(addressmEkmibH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPsoWsHqm = await LUP.new({from: accounts[5]});
		const uinteKQig8d = BigInt("1385")
		const uintKCngs9i = BigInt("527")
		const addresslTn2X7R = "0x0000000000000000000000000000000000000000"
		const uintq8h6uOz = BigInt("519")
		const addressQqkUVrK = accounts[0]
		const uintgaRGqHh = BigInt("278")
		const uintQdRWlOy = BigInt("1143")
		const addressEVpMhO9 = accounts[0]
		const addressUo66AiA = accounts[2]
		const uintEahQxEi = BigInt("1643")
		const uintVcEk3Hr = BigInt("720")
		const addressJJuYfek = accounts[2]
		const uintkMZltuH = BigInt("1115")
		const addressMoL3weB = accounts[4]
		const boolRZGQFN = await LUPsoWsHqm.transferWithLock.call(addresslTn2X7R, uintKCngs9i, uinteKQig8d, {from: accounts[5]});
		const boolhJxF6kH = await LUPsoWsHqm.transfer.call(addressQqkUVrK, uintq8h6uOz, {from: accounts[0]});
		const stringi4BcGsw = await LUPsoWsHqm.symbol.call({from: accounts[2]});
		const booleqyQFCQ = await LUPsoWsHqm.transferWithLock.call(addressEVpMhO9, uintQdRWlOy, uintgaRGqHh, {from: accounts[3]});
		const uint8l7SYysd = await LUPsoWsHqm.decimals.call({from: accounts[2]});
		const uint256sUbvQy = await LUPsoWsHqm.balanceOf.call(addressUo66AiA, {from: accounts[3]});
		const boolJGE9QHq = await LUPsoWsHqm.transferWithLock.call(addressJJuYfek, uintVcEk3Hr, uintEahQxEi, {from: accounts[5]});
		const boolnpefZ5 = await LUPsoWsHqm.transfer.call(addressMoL3weB, uintkMZltuH, {from: accounts[4]});

		await expect(LUPsoWsHqm.transferWithLock.call(addresslTn2X7R, uintKCngs9i, uinteKQig8d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})