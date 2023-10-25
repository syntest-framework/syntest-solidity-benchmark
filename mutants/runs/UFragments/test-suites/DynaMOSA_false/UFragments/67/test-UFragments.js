const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsY3SZgJq = await UFragments.new({from: accounts[1]});
		const addressgDbDhc5 = accounts[2]
		const uintMzgqDiP = BigInt("1444")
		const addressyFknXc4 = accounts[4]
		const address1DnFsG = accounts[1]
		const intsJtQw1 = BigInt("865")
		const uint256uyJuWl7 = await UFragmentsY3SZgJq.balanceOf.call(addressgDbDhc5, {from: "0x0000000000000000000000000000000000000001"});
		const boolk5kQiuf = await UFragmentsY3SZgJq.isOwner.call({from: accounts[2]});
		const boolNCEvir = await UFragmentsY3SZgJq.transferFrom.call(address1DnFsG, addressyFknXc4, uintMzgqDiP, {from: accounts[2]});
		const boolItde6EE = await UFragmentsY3SZgJq.isOwner.call({from: accounts[0]});
		const int256stuXat5 = await UFragmentsY3SZgJq.abs.call(intsJtQw1, {from: accounts[2]});

		assert.equal(boolk5kQiuf, false)
		assert.equal(uint256uyJuWl7, BigInt("0"))
		await expect(UFragmentsY3SZgJq.transferFrom.call(address1DnFsG, addressyFknXc4, uintMzgqDiP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsbsX9jR9 = await UFragments.new({from: accounts[0]});
		const intr1k4YUC = BigInt("-205")
		const intSRYXVV2 = BigInt("-81")
		const intFnwNcD5 = BigInt("1395")
		const addresskxXr2uB = accounts[1]
		const int256Q7FGSGM = await UFragmentsbsX9jR9.abs.call(intr1k4YUC, {from: accounts[3]});
		await UFragmentsbsX9jR9.initializer.call({from: accounts[2]});
		const int256eIcuAC4 = await UFragmentsbsX9jR9.add.call(intFnwNcD5, intSRYXVV2, {from: accounts[4]});
		const addresstrQeGFg = await UFragmentsbsX9jR9.transferOwnership.call(addresskxXr2uB, {from: accounts[4]});

		await expect(UFragmentsbsX9jR9.abs.call(intr1k4YUC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsv3U6vNa = await UFragments.new({from: accounts[5]});
		const uintud3U9ON = BigInt("778")
		const addressrrLN6U = accounts[1]
		const addressgfsMVpw = accounts[4]
		const uint256UKPLgFw = await UFragmentsv3U6vNa.calRebase.call({from: accounts[3]});
		const uint256iDWUKbO = await UFragmentsv3U6vNa.totalSupply.call({from: accounts[1]});
		const boolUmcOfyK = await UFragmentsv3U6vNa.transferFrom.call(addressgfsMVpw, addressrrLN6U, uintud3U9ON, {from: accounts[2]});

		await expect(UFragmentsv3U6vNa.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxyI3Qk = await UFragments.new({from: accounts[0]});
		const addressmvyWcTq = accounts[0]
		const uintKlqzZOh = BigInt("2007")
		const addressyrrWHdt = accounts[4]
		const addressa2IA8WR = accounts[3]
		const uintxxe6ZG0 = BigInt("2029")
		const addressWFvO9Ih = accounts[3]
		const addresswJREC9v = await UFragmentsxyI3Qk.initialize.call(addressmvyWcTq, {from: accounts[3]});
		const boolTX8fVTS = await UFragmentsxyI3Qk.transferFrom.call(addressa2IA8WR, addressyrrWHdt, uintKlqzZOh, {from: accounts[3]});
		const boolWAqrnVQ = await UFragmentsxyI3Qk.transfer.call(addressWFvO9Ih, uintxxe6ZG0, {from: accounts[3]});
		const uint256hDpmFO9 = await UFragmentsxyI3Qk.totalSupply.call({from: accounts[0]});

		await expect(UFragmentsxyI3Qk.initialize.call(addressmvyWcTq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsmteuJql = await UFragments.new({from: accounts[1]});
		const addressHOVrPw8 = accounts[0]
		const addressSkFk6Wj = await UFragmentsmteuJql.owner.call({from: accounts[3]});
		const addressd23rVOg = await UFragmentsmteuJql.initialize.call(addressHOVrPw8, {from: accounts[0]});

		assert.equal(addressSkFk6Wj, 0x0000000000000000000000000000000000000000)
		await expect(UFragmentsmteuJql.initialize.call(addressHOVrPw8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsbsX9jR9 = await UFragments.new({from: accounts[0]});
		const intlfLlHp = BigInt("-205")
		const intTg7u4od = BigInt("-81")
		const intzzcbD3 = BigInt("1395")
		const intrfRKOcw = BigInt("-169")
		const int5btg3Y = BigInt("264")
		const addressDs6pBJ4 = accounts[1]
		const boolhW172C0 = await UFragmentsbsX9jR9.rebaseTimeInfo.call({from: accounts[2]});
		const int256Q7FGSGM = await UFragmentsbsX9jR9.abs.call(intlfLlHp, {from: accounts[3]});
		await UFragmentsbsX9jR9.initializer.call({from: accounts[2]});
		const int256eIcuAC4 = await UFragmentsbsX9jR9.add.call(intzzcbD3, intTg7u4od, {from: accounts[4]});
		const int256CWj2Ta = await UFragmentsbsX9jR9.add.call(int5btg3Y, intrfRKOcw, {from: accounts[0]});
		const addresstrQeGFg = await UFragmentsbsX9jR9.transferOwnership.call(addressDs6pBJ4, {from: accounts[4]});

		await expect(UFragmentsbsX9jR9.abs.call(intlfLlHp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsv3U6vNa = await UFragments.new({from: accounts[5]});
		const uintrJOQ5it = BigInt("778")
		const addressp1Gxpp9 = accounts[1]
		const addresslKaTA3Q = accounts[4]
		const stringUWUvxbk = await UFragmentsv3U6vNa.name.call({from: accounts[2]});
		const uint256UKPLgFw = await UFragmentsv3U6vNa.calRebase.call({from: accounts[3]});
		const uint256iDWUKbO = await UFragmentsv3U6vNa.totalSupply.call({from: accounts[1]});
		const boolUmcOfyK = await UFragmentsv3U6vNa.transferFrom.call(addresslKaTA3Q, addressp1Gxpp9, uintrJOQ5it, {from: accounts[2]});
		const uint8RPBOuQ = await UFragmentsv3U6vNa.decimals.call({from: accounts[3]});

		assert.equal(stringUWUvxbk, "")
		await expect(UFragmentsv3U6vNa.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsv3U6vNa = await UFragments.new({from: accounts[5]});
		const uintU1NqIwO = BigInt("82")
		const stringkCMT9Nu = "du7FnWiVsVKvN2fe3xo921KHYRbtRc5lJIWk28lJiAWdbGHxmmJ6we7bQ3hpB70glrEvbGmjhcAdvIfg4DAkQIBRPVXfV"
		const stringIIQcp7t = "MgBfXYHvfEb71Uvr7v90hsL6tY9sA4NZuEVEPzRJct1fLjO6CEonMr"
		const addressJ1Y68lE = accounts[5]
		const addressuTdwguo = accounts[5]
		const uintnAxog8d = BigInt("778")
		const addressqrEC4SU = accounts[2]
		const addressbKgWbli = accounts[4]
		const stringHJ75XgI = await UFragmentsv3U6vNa.initialize.call(stringIIQcp7t, stringkCMT9Nu, uintU1NqIwO, {from: accounts[3]});
		const uint256iC1FCrw = await UFragmentsv3U6vNa.allowance.call(addressuTdwguo, addressJ1Y68lE, {from: accounts[5]});
		const uint256XY6t8ge = await UFragmentsv3U6vNa.calRebase.call({from: accounts[2]});
		const stringqAPtsur = await UFragmentsv3U6vNa.symbol.call({from: accounts[0]});
		const uint256iDWUKbO = await UFragmentsv3U6vNa.totalSupply.call({from: accounts[1]});
		const boolUmcOfyK = await UFragmentsv3U6vNa.transferFrom.call(addressbKgWbli, addressqrEC4SU, uintnAxog8d, {from: accounts[2]});

		assert.equal(uint256iC1FCrw, BigInt("0"))
		await expect(UFragmentsv3U6vNa.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsdicl6hE = await UFragments.new({from: accounts[1]});
		const uintlfQUCRD = BigInt("850")
		const addressig5r2h1 = accounts[3]
		const addressKlh6vMN = accounts[1]
		const stringRRuMJO2 = await UFragmentsdicl6hE.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolz1PRaPR = await UFragmentsdicl6hE.transferFrom.call(addressKlh6vMN, addressig5r2h1, uintlfQUCRD, {from: accounts[1]});
		const stringBYlRX8j = await UFragmentsdicl6hE.symbol.call({from: accounts[1]});

		assert.equal(stringRRuMJO2, "")
		await expect(UFragmentsdicl6hE.transferFrom.call(addressKlh6vMN, addressig5r2h1, uintlfQUCRD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsY3SZgJq = await UFragments.new({from: accounts[1]});
		const addressplx1ftl = accounts[2]
		const uintMIq8N7p = BigInt("1444")
		const addressza1jzqZ = accounts[4]
		const addressjZYdX7q = accounts[1]
		const uintyOlGZPI = BigInt("1505")
		const addressLSDLxxH = accounts[4]
		const uint256uyJuWl7 = await UFragmentsY3SZgJq.balanceOf.call(addressplx1ftl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mQ4F3Q3 = await UFragmentsY3SZgJq.totalSupply.call({from: accounts[0]});
		const boolk5kQiuf = await UFragmentsY3SZgJq.isOwner.call({from: accounts[2]});
		const boolNCEvir = await UFragmentsY3SZgJq.transferFrom.call(addressjZYdX7q, addressza1jzqZ, uintMIq8N7p, {from: accounts[2]});
		const boolItde6EE = await UFragmentsY3SZgJq.isOwner.call({from: accounts[0]});
		const addressrJSz6yg = await UFragmentsY3SZgJq.initRebase.call(addressLSDLxxH, uintyOlGZPI, {from: accounts[2]});

		assert.equal(boolk5kQiuf, false)
		assert.equal(uint256mQ4F3Q3, BigInt("0"))
		assert.equal(uint256uyJuWl7, BigInt("0"))
		await expect(UFragmentsY3SZgJq.transferFrom.call(addressjZYdX7q, addressza1jzqZ, uintMIq8N7p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsv3U6vNa = await UFragments.new({from: accounts[5]});
		const addressUN0tbxi = accounts[1]
		const uinthcPrK0i = BigInt("44")
		const addressCdIEVzu = accounts[5]
		const intVuCzCje = BigInt("-98")
		const intm4VXfVy = BigInt("1203")
		const uintghzC0m3 = BigInt("778")
		const addressh8b2sys = accounts[2]
		const addressBe8LMyI = accounts[4]
		const uint256AkzEVv = await UFragmentsv3U6vNa.balanceOf.call(addressUN0tbxi, {from: accounts[4]});
		const uint8Omq3SxN = await UFragmentsv3U6vNa.decimals.call({from: accounts[1]});
		const addressqSp2buG = await UFragmentsv3U6vNa.initRebase.call(addressCdIEVzu, uinthcPrK0i, {from: accounts[2]});
		const uint256UKPLgFw = await UFragmentsv3U6vNa.calRebase.call({from: accounts[3]});
		const int256iIEM1Py = await UFragmentsv3U6vNa.add.call(intm4VXfVy, intVuCzCje, {from: "0x0000000000000000000000000000000000000001"});
		const stringqAPtsur = await UFragmentsv3U6vNa.symbol.call({from: accounts[0]});
		const boolUmcOfyK = await UFragmentsv3U6vNa.transferFrom.call(addressBe8LMyI, addressh8b2sys, uintghzC0m3, {from: accounts[2]});

		assert.equal(uint256AkzEVv, BigInt("0"))
		assert.equal(uint8Omq3SxN, BigInt("0"))
		await expect(UFragmentsv3U6vNa.initRebase.call(addressCdIEVzu, uinthcPrK0i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentstL2xoqK = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intMr6uMaD = BigInt("-1639")
		const intMxpsOgd = BigInt("-1584")
		const intD4gdb4 = BigInt("1399")
		const intFUYEQ5x = BigInt("1971")
		const addressPEfe6Wb = "0x0000000000000000000000000000000000000001"
		const addressP68f3tQ = accounts[2]
		const int256KIxzjA = await UFragmentstL2xoqK.mul.call(intMxpsOgd, intMr6uMaD, {from: accounts[2]});
		const int256YGhdbXo = await UFragmentstL2xoqK.add.call(intFUYEQ5x, intD4gdb4, {from: "0x0000000000000000000000000000000000000001"});
		await UFragmentstL2xoqK.renounceOwnership.call({from: accounts[0]});
		const addressDFtz7cr = await UFragmentstL2xoqK.initialize.call(addressPEfe6Wb, {from: accounts[4]});
		const addressnIeJWk = await UFragmentstL2xoqK.initialize.call(addressP68f3tQ, {from: accounts[3]});
	});

	it('test for UFragments', async () => {
		const UFragmentsgqRtkuN = await UFragments.new({from: accounts[1]});
		const uints0DCgas = BigInt("497")
		const addressKtokeaQ = accounts[2]
		const uintv2Jm6jH = BigInt("1728")
		const addressXW638j = accounts[3]
		const bool4wvpPX = await UFragmentsgqRtkuN.transfer.call(addressKtokeaQ, uints0DCgas, {from: accounts[4]});
		await UFragmentsgqRtkuN.renounceOwnership.call({from: accounts[4]});
		await UFragmentsgqRtkuN.onlyOwner.call({from: accounts[2]});
		const boolC7KViEQ = await UFragmentsgqRtkuN.approve.call(addressXW638j, uintv2Jm6jH, {from: accounts[5]});
		const uint8c6n7NbR = await UFragmentsgqRtkuN.decimals.call({from: accounts[3]});

		await expect(UFragmentsgqRtkuN.transfer.call(addressKtokeaQ, uints0DCgas, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsv3U6vNa = await UFragments.new({from: accounts[5]});
		const uintFCFETe = BigInt("1615")
		const addressGH9T4Qk = accounts[1]
		const addressUQiaYaj = accounts[1]
		const uinte4eIKlL = BigInt("955")
		const addressIIjfvAd = accounts[5]
		const intrPvVHg0 = BigInt("593")
		const intFnh5oEb = BigInt("-299")
		const intH8bzhOd = BigInt("-116")
		const intSU5U7vM = BigInt("1203")
		const boolgcMzck2 = await UFragmentsv3U6vNa.approve.call(addressGH9T4Qk, uintFCFETe, {from: accounts[2]});
		const uint256AkzEVv = await UFragmentsv3U6vNa.balanceOf.call(addressUQiaYaj, {from: accounts[4]});
		const uint256UKPLgFw = await UFragmentsv3U6vNa.calRebase.call({from: accounts[3]});
		const boolJCoNwJc = await UFragmentsv3U6vNa.approve.call(addressIIjfvAd, uinte4eIKlL, {from: "0x0000000000000000000000000000000000000001"});
		const int256YaiPWIW = await UFragmentsv3U6vNa.sub.call(intFnh5oEb, intrPvVHg0, {from: accounts[4]});
		const int256iIEM1Py = await UFragmentsv3U6vNa.add.call(intSU5U7vM, intH8bzhOd, {from: "0x0000000000000000000000000000000000000001"});
		const stringqAPtsur = await UFragmentsv3U6vNa.symbol.call({from: accounts[0]});
		const addressH3yLMmK = await UFragmentsv3U6vNa.owner.call({from: accounts[4]});
		const uint256tPg9mJv = await UFragmentsv3U6vNa.totalSupply.call({from: accounts[4]});
		const uint256iDWUKbO = await UFragmentsv3U6vNa.totalSupply.call({from: accounts[1]});
		const addressJ8ZpmTV = await UFragmentsv3U6vNa.owner.call({from: accounts[2]});

		assert.equal(boolgcMzck2, true)
		assert.equal(uint256AkzEVv, BigInt("0"))
		await expect(UFragmentsv3U6vNa.calRebase.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})