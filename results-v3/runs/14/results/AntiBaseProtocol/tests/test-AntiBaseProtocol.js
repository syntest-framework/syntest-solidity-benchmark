const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolzZmYiWE = await AntiBaseProtocol.new({from: accounts[4]});
		const uintb9PVbn0 = BigInt("625")
		const addressCoko4HS = accounts[3]
		const addressMIX6n0D = accounts[1]
		const uintigcV8Q6 = BigInt("1563")
		const addresscT8TKbd = accounts[3]
		const addressYYDCZhH = accounts[3]
		const uintrz0rhMw = BigInt("131")
		const addressqAYLb87 = accounts[4]
		const boolzErSTRq = await AntiBaseProtocolzZmYiWE.transfer.call(addressCoko4HS, uintb9PVbn0, {from: "0x0000000000000000000000000000000000000001"});
		await AntiBaseProtocolzZmYiWE.onlyOwner.call({from: accounts[2]});
		const uint256vDGDKMv = await AntiBaseProtocolzZmYiWE.totalSupply.call({from: accounts[3]});
		const addressshlZMNc = await AntiBaseProtocolzZmYiWE._transferOwnership.call(addressMIX6n0D, {from: accounts[4]});
		const addresscFF6hd = await AntiBaseProtocolzZmYiWE._approve.call(addressYYDCZhH, addresscT8TKbd, uintigcV8Q6, {from: accounts[0]});
		const boolLX1qUd = await AntiBaseProtocolzZmYiWE.decreaseAllowance.call(addressqAYLb87, uintrz0rhMw, {from: accounts[1]});

		await expect(AntiBaseProtocolzZmYiWE.transfer.call(addressCoko4HS, uintb9PVbn0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintOTUcQTF = BigInt("251")
		const uint256KNih2Rr = await AntiBaseProtocolCklNRb6.findBurnFee.call(uintOTUcQTF, {from: accounts[0]});
		const uint256FFvfN0 = await AntiBaseProtocolCklNRb6.totalSupply.call({from: accounts[4]});

		assert.equal(uint256FFvfN0, BigInt("31250000000000000000"))
		assert.equal(uint256KNih2Rr, BigInt("45"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolhaytCJm = await AntiBaseProtocol.new({from: accounts[3]});
		const addresso27YiUH = accounts[4]
		const addressYfZ1uP0 = accounts[4]
		const uint8vZWqg1f = await AntiBaseProtocolhaytCJm.decimals.call({from: accounts[4]});
		const uint256t0eE2NU = await AntiBaseProtocolhaytCJm.allowance.call(addressYfZ1uP0, addresso27YiUH, {from: accounts[1]});

		assert.equal(uint256t0eE2NU, BigInt("0"))
		assert.equal(uint8vZWqg1f, BigInt("18"))
	});

	it('test for AntiBaseProtocol', async () => {
		const string1XDdv0 = "dt"
		const stringoRiubPZ = "DvWS2jhNwXvM1PNEcoTFkZmlxZLmDu3QaoKokkaoLo3kvDAIil5lIqxaYabGbUFeUMCcP3tqdLzOYKqmKeEScfnK5jH8Awyh"
		const uintlEkbfVM = BigInt("142")
		const AntiBaseProtocolDJWJeG2 = await AntiBaseProtocol.new(string1XDdv0, stringoRiubPZ, uintlEkbfVM, {from: accounts[0]});
		const uintZJv2Zbs = BigInt("506")
		const addressS9eEtOV = accounts[0]
		const uintCp8HLov = BigInt("1033")
		const addressOHWzW1O = accounts[1]
		const uintmX79JZn = BigInt("1194")
		const addresswMLVtgV = accounts[4]
		const uintviVbeoc = BigInt("660")
		const addressgPfsaaS = accounts[1]
		await AntiBaseProtocolDJWJeG2.renounceOwnership.call({from: accounts[5]});
		const addressnCccoli = await AntiBaseProtocolDJWJeG2._burn.call(addressS9eEtOV, uintZJv2Zbs, {from: accounts[5]});
		const boolx9buiRA = await AntiBaseProtocolDJWJeG2.transfer.call(addressOHWzW1O, uintCp8HLov, {from: accounts[4]});
		const boolaQq8qPi = await AntiBaseProtocolDJWJeG2.decreaseAllowance.call(addresswMLVtgV, uintmX79JZn, {from: accounts[2]});
		const addressOnG0z7J = await AntiBaseProtocolDJWJeG2.burnFrom.call(addressgPfsaaS, uintviVbeoc, {from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolyF44c6 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintPeOGhvj = BigInt("1178")
		await AntiBaseProtocolyF44c6.renounceOwnership.call({from: accounts[4]});
		const uint256ZKWEXei = await AntiBaseProtocolyF44c6.findRewardFee.call(uintPeOGhvj, {from: accounts[2]});
		await AntiBaseProtocolyF44c6.renounceOwnership.call({from: accounts[0]});

		await expect(AntiBaseProtocolyF44c6.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolPegDK5b = await AntiBaseProtocol.new({from: accounts[2]});
		const addresss3YXWAw = accounts[0]
		const uintxHUMUfA = BigInt("1636")
		const addressq6JjRy = "0x0000000000000000000000000000000000000001"
		const uintb5o80EI = BigInt("1648")
		const addressYlD7w0K = accounts[1]
		const uintifjEgEh = BigInt("734")
		const addressCJtpbCJ = accounts[3]
		const uintSkGufO6 = BigInt("500")
		const uint256s3phYtv = await AntiBaseProtocolPegDK5b.balanceOf.call(addresss3YXWAw, {from: accounts[2]});
		const boolcgjL5SA = await AntiBaseProtocolPegDK5b.decreaseAllowance.call(addressq6JjRy, uintxHUMUfA, {from: accounts[4]});
		const boolPhTE36 = await AntiBaseProtocolPegDK5b.transfer.call(addressYlD7w0K, uintb5o80EI, {from: accounts[2]});
		const boolnQD4gtr = await AntiBaseProtocolPegDK5b.approve.call(addressCJtpbCJ, uintifjEgEh, {from: accounts[4]});
		const uint256VoaYQg5 = await AntiBaseProtocolPegDK5b.burn.call(uintSkGufO6, {from: accounts[2]});

		assert.equal(uint256s3phYtv, BigInt("0"))
		await expect(AntiBaseProtocolPegDK5b.decreaseAllowance.call(addressq6JjRy, uintxHUMUfA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintd1Rorre = BigInt("207")
		const addressTW48o03 = accounts[2]
		const uintADPI0b2 = BigInt("641")
		const addressYRNgqGC = accounts[5]
		const uint256KNih2Rr = await AntiBaseProtocolCklNRb6.findBurnFee.call(uintd1Rorre, {from: accounts[0]});
		const uint256WVKUDp = await AntiBaseProtocolCklNRb6.balanceOf.call(addressTW48o03, {from: accounts[3]});
		const uint256FFvfN0 = await AntiBaseProtocolCklNRb6.totalSupply.call({from: accounts[4]});
		const boolEpC7kMh = await AntiBaseProtocolCklNRb6.approve.call(addressYRNgqGC, uintADPI0b2, {from: accounts[1]});

		assert.equal(boolEpC7kMh, true)
		assert.equal(uint256FFvfN0, BigInt("31250000000000000000"))
		assert.equal(uint256KNih2Rr, BigInt("45"))
		assert.equal(uint256WVKUDp, BigInt("0"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintydCUs6R = BigInt("251")
		const uintbn4JVZY = BigInt("1631")
		const addressjQbCzfQ = accounts[4]
		const uint256KNih2Rr = await AntiBaseProtocolCklNRb6.findBurnFee.call(uintydCUs6R, {from: accounts[0]});
		const booldm6QIcQ = await AntiBaseProtocolCklNRb6.approve.call(addressjQbCzfQ, uintbn4JVZY, {from: accounts[5]});
		const uint256FFvfN0 = await AntiBaseProtocolCklNRb6.totalSupply.call({from: accounts[4]});
		const stringfmnBrqg = await AntiBaseProtocolCklNRb6.name.call({from: accounts[3]});
		await AntiBaseProtocolCklNRb6.requestGas.call({from: accounts[5]});

		assert.equal(booldm6QIcQ, true)
		assert.equal(stringfmnBrqg, "https://t.me/antibaseprotocol")
		assert.equal(uint256FFvfN0, BigInt("31250000000000000000"))
		assert.equal(uint256KNih2Rr, BigInt("45"))
		await expect(AntiBaseProtocolCklNRb6.requestGas.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolgW3XKcM = await AntiBaseProtocol.new({from: accounts[3]});
		const uintIwLkT3f = BigInt("1874")
		const uintyEiwLa = BigInt("954")
		const addressTZ9bl1t = accounts[1]
		const addressmTBfKh4 = "0x0000000000000000000000000000000000000001"
		const addressBCu0UJ = accounts[1]
		const uintiGz1NFP = BigInt("1662")
		const addressQi4mmto = accounts[2]
		const addressH2li4Re = accounts[1]
		const uint256P9w63os = await AntiBaseProtocolgW3XKcM.burn.call(uintIwLkT3f, {from: accounts[4]});
		const addressT2ag5RU = await AntiBaseProtocolgW3XKcM.burnFrom.call(addressTZ9bl1t, uintyEiwLa, {from: accounts[1]});
		const uint256uvu6ajt = await AntiBaseProtocolgW3XKcM.allowance.call(addressBCu0UJ, addressmTBfKh4, {from: accounts[1]});
		const boolhsirVPg = await AntiBaseProtocolgW3XKcM.transferFrom.call(addressH2li4Re, addressQi4mmto, uintiGz1NFP, {from: accounts[4]});

		await expect(AntiBaseProtocolgW3XKcM.burn.call(uintIwLkT3f, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintjpEB7J0 = BigInt("227")
		const uint256KNih2Rr = await AntiBaseProtocolCklNRb6.findBurnFee.call(uintjpEB7J0, {from: accounts[0]});
		const uint256FFvfN0 = await AntiBaseProtocolCklNRb6.totalSupply.call({from: accounts[4]});
		const stringIs8dnXM = await AntiBaseProtocolCklNRb6.symbol.call({from: accounts[4]});

		assert.equal(stringIs8dnXM, "ABASE")
		assert.equal(uint256FFvfN0, BigInt("31250000000000000000"))
		assert.equal(uint256KNih2Rr, BigInt("45"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintqgBY9Nv = BigInt("1284")
		const uint256pYdtkBK = await AntiBaseProtocolCklNRb6.findRewardFee.call(uintqgBY9Nv, {from: accounts[1]});
		const uint256FFvfN0 = await AntiBaseProtocolCklNRb6.totalSupply.call({from: accounts[4]});

		assert.equal(uint256FFvfN0, BigInt("31250000000000000000"))
		assert.equal(uint256pYdtkBK, BigInt("65"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const addressJIbB6jQ = accounts[1]
		const uintdgwmSEt = BigInt("223")
		const uintPTR1Nio = BigInt("52")
		const addressf9Vu5Kk = accounts[2]
		const addressSvcYkXm = accounts[3]
		const uint256BhO0gjB = await AntiBaseProtocolCklNRb6.balanceOf.call(addressJIbB6jQ, {from: accounts[4]});
		const uint256KNih2Rr = await AntiBaseProtocolCklNRb6.findBurnFee.call(uintdgwmSEt, {from: accounts[0]});
		const uint256FFvfN0 = await AntiBaseProtocolCklNRb6.totalSupply.call({from: accounts[4]});
		const boolCxAK1oB = await AntiBaseProtocolCklNRb6.transferFrom.call(addressSvcYkXm, addressf9Vu5Kk, uintPTR1Nio, {from: accounts[2]});

		assert.equal(uint256BhO0gjB, BigInt("0"))
		assert.equal(uint256FFvfN0, BigInt("31250000000000000000"))
		assert.equal(uint256KNih2Rr, BigInt("45"))
		await expect(AntiBaseProtocolCklNRb6.transferFrom.call(addressSvcYkXm, addressf9Vu5Kk, uintPTR1Nio, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintoVbWGCt = BigInt("315")
		const addressxZLwFJg = accounts[2]
		const uintaypwX6M = BigInt("248")
		const addressQidjISg = await AntiBaseProtocolCklNRb6.burnFrom.call(addressxZLwFJg, uintoVbWGCt, {from: accounts[3]});
		const uint256KNih2Rr = await AntiBaseProtocolCklNRb6.findBurnFee.call(uintaypwX6M, {from: accounts[0]});

		await expect(AntiBaseProtocolCklNRb6.burnFrom.call(addressxZLwFJg, uintoVbWGCt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoljCRrnQD = await AntiBaseProtocol.new({from: accounts[5]});
		const uintWwhp9Bj = BigInt("1991")
		const addressCNPuQX = accounts[5]
		const uintKOMJrNy = BigInt("768")
		const addressEwKOQbW = accounts[2]
		const boolkAgGGX = await AntiBaseProtocoljCRrnQD.isOwner.call({from: accounts[3]});
		const uint256XzlsYuS = await AntiBaseProtocoljCRrnQD.totalSupply.call({from: accounts[0]});
		const addressEnZiChO = await AntiBaseProtocoljCRrnQD.burnFrom.call(addressCNPuQX, uintWwhp9Bj, {from: accounts[3]});
		const boolKmJMi8e = await AntiBaseProtocoljCRrnQD.transfer.call(addressEwKOQbW, uintKOMJrNy, {from: "0x0000000000000000000000000000000000000001"});
		const stringB2o2jyT = await AntiBaseProtocoljCRrnQD.symbol.call({from: accounts[3]});

		assert.equal(boolkAgGGX, false)
		assert.equal(uint256XzlsYuS, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocoljCRrnQD.burnFrom.call(addressCNPuQX, uintWwhp9Bj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintYN3rVgn = BigInt("787")
		const addressaJgHqHw = accounts[3]
		const uintqoVyJYj = BigInt("251")
		const boolhiBcVaf = await AntiBaseProtocolCklNRb6.increaseAllowance.call(addressaJgHqHw, uintYN3rVgn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KNih2Rr = await AntiBaseProtocolCklNRb6.findBurnFee.call(uintqoVyJYj, {from: accounts[0]});

		assert.equal(boolhiBcVaf, true)
		assert.equal(uint256KNih2Rr, BigInt("45"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolgKFNdI2 = await AntiBaseProtocol.new({from: accounts[0]});
		const addressvpd2sCR = accounts[2]
		const addressjWeJJW0 = accounts[1]
		const uintB9Lpm0N = BigInt("1525")
		const addressCpYb6PR = accounts[1]
		const uint256CFkrLrs = await AntiBaseProtocolgKFNdI2.allowance.call(addressjWeJJW0, addressvpd2sCR, {from: accounts[0]});
		const addresstwq4gkW = await AntiBaseProtocolgKFNdI2.owner.call({from: accounts[3]});
		const addressVs0YvsR = await AntiBaseProtocolgKFNdI2._mint.call(addressCpYb6PR, uintB9Lpm0N, {from: accounts[5]});

		assert.equal(addresstwq4gkW, 0xB3f7BF3e4404b063a45D1bB0C9bb2108B16d49fC)
		assert.equal(uint256CFkrLrs, BigInt("0"))
		await expect(AntiBaseProtocolgKFNdI2._mint.call(addressCpYb6PR, uintB9Lpm0N, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const addresscat1CXq = accounts[0]
		const addressxXlfZTt = await AntiBaseProtocolCklNRb6.transferOwnership.call(addresscat1CXq, {from: accounts[5]});
		const uint256FFvfN0 = await AntiBaseProtocolCklNRb6.totalSupply.call({from: accounts[4]});

		assert.equal(uint256FFvfN0, BigInt("31250000000000000000"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uint256FFvfN0 = await AntiBaseProtocolCklNRb6.totalSupply.call({from: accounts[4]});
		await AntiBaseProtocolCklNRb6.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256FFvfN0, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolCklNRb6.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolCklNRb6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintvpHDmpK = BigInt("865")
		const addressg42Y04x = accounts[1]
		const addresswraSNVX = accounts[5]
		const uintlay1D6r = BigInt("60")
		const boolTnz00wi = await AntiBaseProtocolCklNRb6.transferFrom.call(addresswraSNVX, addressg42Y04x, uintvpHDmpK, {from: accounts[1]});
		const uint256KNih2Rr = await AntiBaseProtocolCklNRb6.findBurnFee.call(uintlay1D6r, {from: accounts[0]});

		await expect(AntiBaseProtocolCklNRb6.transferFrom.call(addresswraSNVX, addressg42Y04x, uintvpHDmpK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolpq8VNhD = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTS8LZLj = accounts[2]
		const uintqJCggMS = BigInt("1324")
		const addressdnvvQHO = accounts[1]
		const uintmXykxJT = BigInt("1585")
		const addressLZXZFwJ = accounts[0]
		const addresswXlE926 = accounts[1]
		const uintUHXRBGo = BigInt("522")
		const addresssb7tuSP = accounts[4]
		const addressQdAtZJn = await AntiBaseProtocolpq8VNhD._transferOwnership.call(addressTS8LZLj, {from: accounts[3]});
		const bool01xCf8 = await AntiBaseProtocolpq8VNhD.transfer.call(addressdnvvQHO, uintqJCggMS, {from: accounts[1]});
		const boolqf8kDky = await AntiBaseProtocolpq8VNhD.decreaseAllowance.call(addressLZXZFwJ, uintmXykxJT, {from: accounts[2]});
		const boolCUxyAba = await AntiBaseProtocolpq8VNhD.isOwner.call({from: accounts[0]});
		const addressKrV4XYe = await AntiBaseProtocolpq8VNhD._transferOwnership.call(addresswXlE926, {from: accounts[2]});
		const addresswD4CmYa = await AntiBaseProtocolpq8VNhD.burnFrom.call(addresssb7tuSP, uintUHXRBGo, {from: accounts[2]});
	});
})