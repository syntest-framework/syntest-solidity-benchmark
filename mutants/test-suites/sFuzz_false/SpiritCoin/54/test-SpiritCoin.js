const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressjZHGEuv = accounts[5]
		const addressFqUOptG = accounts[2]
		const SpiritCoinSzIht1B = await SpiritCoin.new(addressjZHGEuv, addressFqUOptG, {from: accounts[3]});
		const uintFsb3CEB = BigInt("1668")
		const addressJtrymEC = accounts[1]
		const uintG85RYUS = BigInt("1333")
		const addressQf2wPUI = accounts[0]
		const uintA7PJuiO = BigInt("504")
		const address7SByVi = accounts[3]
		const boolmqzNcg = await SpiritCoinSzIht1B.approve.call(addressJtrymEC, uintFsb3CEB, {from: accounts[0]});
//		const boolWv5akwr = await SpiritCoinSzIht1B.transfer.call(addressQf2wPUI, uintG85RYUS, {from: accounts[2]});
//		const addressS1oDnA = await SpiritCoinSzIht1B.mint.call(address7SByVi, uintA7PJuiO, {from: accounts[4]});

		assert.equal(boolmqzNcg, true)
		await expect(SpiritCoinSzIht1B.transfer.call(addressQf2wPUI, uintG85RYUS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressFMgQEW6 = accounts[2]
		const address6NSqkB = accounts[1]
		const SpiritCoinA3Jk43H = await SpiritCoin.new(addressFMgQEW6, address6NSqkB, {from: accounts[0]});
		const uintMgdHQZD = BigInt("54")
		const addressxV9B36 = accounts[5]
		const addressQ01gGq = accounts[0]
		const addressZNIlP2P = accounts[1]
		const addressmp5IuH2 = accounts[3]
		const addressNSBstLG = accounts[3]
		const addressygOfW8 = accounts[1]
		const uintdryR8Qe = BigInt("1837")
		const addressdGQlJC = accounts[5]
		const addressQvSEZYC = accounts[0]
		const boolhjJ4JqM = await SpiritCoinA3Jk43H.transfer.call(addressxV9B36, uintMgdHQZD, {from: accounts[2]});
		const uintznakTpX = await SpiritCoinA3Jk43H.allowance.call(addressZNIlP2P, addressQ01gGq, {from: accounts[5]});
		const uintOioFBli = await SpiritCoinA3Jk43H.allowance.call(addressNSBstLG, addressmp5IuH2, {from: accounts[2]});
		const uinturvplT = await SpiritCoinA3Jk43H.balanceOf.call(addressygOfW8, {from: accounts[2]});
//		const boolUK3eGeF = await SpiritCoinA3Jk43H.transferFrom.call(addressQvSEZYC, addressdGQlJC, uintdryR8Qe, {from: accounts[1]});

		assert.equal(boolhjJ4JqM, true)
		assert.equal(uintOioFBli, BigInt("0"))
		assert.equal(uinturvplT, BigInt("0"))
		assert.equal(uintznakTpX, BigInt("0"))
		await expect(SpiritCoinA3Jk43H.transferFrom.call(addressQvSEZYC, addressdGQlJC, uintdryR8Qe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressGxwLobp = accounts[0]
		const addressErlfY4 = accounts[2]
		const SpiritCoinavuPQ7J = await SpiritCoin.new(addressGxwLobp, addressErlfY4, {from: accounts[0]});
		const addresswE7ISxT = accounts[0]
		const uintbwKF41G = BigInt("691")
		const addresst0yQPyI = accounts[4]
		const addressb86519W = accounts[3]
		const uintkuYL5w = BigInt("539")
		const addressvLmTLyI = accounts[2]
		const uintzP6eh0F = await SpiritCoinavuPQ7J.balanceOf.call(addresswE7ISxT, {from: accounts[4]});
//		const addressJ46oj8D = await SpiritCoinavuPQ7J.mint.call(addresst0yQPyI, uintbwKF41G, {from: accounts[4]});
//		const addressbih4RON = await SpiritCoinavuPQ7J.setMinter.call(addressb86519W, {from: accounts[2]});
//		const boolHEPkIcS = await SpiritCoinavuPQ7J.approve.call(addressvLmTLyI, uintkuYL5w, {from: accounts[5]});

		assert.equal(uintzP6eh0F, BigInt("10000000000000000000000000"))
		await expect(SpiritCoinavuPQ7J.mint.call(addresst0yQPyI, uintbwKF41G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressu3FD2J = accounts[0]
		const addressCEb88CC = accounts[1]
		const SpiritCoin3Zbcg8 = await SpiritCoin.new(addressu3FD2J, addressCEb88CC, {from: accounts[3]});
		const uintzoqVMx8 = BigInt("398")
		const addressZ4j4ik = accounts[3]
		const addressxkqZsq = accounts[3]
		const addressGmy7Rmk = accounts[1]
		const uintvKsBpjB = BigInt("72")
		const addressa5gjBTw = accounts[0]
		const addressIf8hsup = accounts[0]
		const addressSJR2ck1 = accounts[4]
		const uintzXuECYx = BigInt("544")
		const addressq5qMpIT = accounts[0]
		const uintsapzusS = BigInt("582")
		const addressGxC086v = accounts[5]
		const uintNgLjH0 = BigInt("1275")
		const address1aGC5C = accounts[0]
		const boolc8RLoLR = await SpiritCoin3Zbcg8.transfer.call(addressZ4j4ik, uintzoqVMx8, {from: accounts[0]});
		const uintGIOfDgk = await SpiritCoin3Zbcg8.allowance.call(addressGmy7Rmk, addressxkqZsq, {from: accounts[3]});
		const boolA5WhhGI = await SpiritCoin3Zbcg8.transfer.call(addressa5gjBTw, uintvKsBpjB, {from: accounts[0]});
		const uintYq1gSEI = await SpiritCoin3Zbcg8.allowance.call(addressSJR2ck1, addressIf8hsup, {from: accounts[5]});
		const addresse1HWexN = await SpiritCoin3Zbcg8.mint.call(addressq5qMpIT, uintzXuECYx, {from: accounts[1]});
		const boolpJCqyss = await SpiritCoin3Zbcg8.approve.call(addressGxC086v, uintsapzusS, {from: "0x0000000000000000000000000000000000000001"});
		const bool6vMljY = await SpiritCoin3Zbcg8.approve.call(address1aGC5C, uintNgLjH0, {from: accounts[0]});

		assert.equal(bool6vMljY, true)
		assert.equal(boolA5WhhGI, true)
		assert.equal(boolc8RLoLR, true)
		assert.equal(boolpJCqyss, true)
		assert.equal(uintGIOfDgk, BigInt("0"))
		assert.equal(uintYq1gSEI, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressdZkkIN8 = accounts[0]
		const addressTGkT9zT = accounts[1]
		const SpiritCoin3Zbcg8 = await SpiritCoin.new(addressdZkkIN8, addressTGkT9zT, {from: accounts[3]});
		const uintCxEvug9 = BigInt("398")
		const addressjMowaO = accounts[3]
		const addressg5XeTAf = accounts[4]
		const addressZhdQhjw = accounts[1]
		const uintwwUvsRl = BigInt("78")
		const addressbSoeTNb = "0x0000000000000000000000000000000000000001"
		const uintGoeoVS = BigInt("582")
		const addressLRUPXAx = accounts[5]
		const addressu1ki0rM = accounts[3]
		const uint6nqOLo = BigInt("1275")
		const addressNY3JIkV = accounts[0]
		const boolc8RLoLR = await SpiritCoin3Zbcg8.transfer.call(addressjMowaO, uintCxEvug9, {from: accounts[0]});
		const uintGIOfDgk = await SpiritCoin3Zbcg8.allowance.call(addressZhdQhjw, addressg5XeTAf, {from: accounts[3]});
		const boolA5WhhGI = await SpiritCoin3Zbcg8.transfer.call(addressbSoeTNb, uintwwUvsRl, {from: accounts[0]});
		const boolpJCqyss = await SpiritCoin3Zbcg8.approve.call(addressLRUPXAx, uintGoeoVS, {from: "0x0000000000000000000000000000000000000001"});
//		const addressfVoPmdB = await SpiritCoin3Zbcg8.setMinter.call(addressu1ki0rM, {from: accounts[3]});
//		const bool6vMljY = await SpiritCoin3Zbcg8.approve.call(addressNY3JIkV, uint6nqOLo, {from: accounts[0]});

		assert.equal(boolA5WhhGI, true)
		assert.equal(boolc8RLoLR, true)
		assert.equal(boolpJCqyss, true)
		assert.equal(uintGIOfDgk, BigInt("0"))
		await expect(SpiritCoin3Zbcg8.setMinter.call(addressu1ki0rM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressqfDyU4h = accounts[0]
		const addressdJJW7l = accounts[3]
		const SpiritCointQn6W6 = await SpiritCoin.new(addressqfDyU4h, addressdJJW7l, {from: "0x0000000000000000000000000000000000000001"});
		const uintyBXUWha = BigInt("1058")
		const addressvJscW5Y = accounts[2]
		const uintOicgLXV = BigInt("902")
		const addressjh3obI3 = accounts[3]
		const uintuWdN2Gl = BigInt("608")
		const addressKJ2kmjI = accounts[5]
		const addressHld2TLV = await SpiritCointQn6W6.mint.call(addressvJscW5Y, uintyBXUWha, {from: accounts[3]});
		const boolA0rMdx2 = await SpiritCointQn6W6.transfer.call(addressjh3obI3, uintOicgLXV, {from: accounts[4]});
		const addresslwpJpFX = await SpiritCointQn6W6.mint.call(addressKJ2kmjI, uintuWdN2Gl, {from: accounts[4]});
	});
})