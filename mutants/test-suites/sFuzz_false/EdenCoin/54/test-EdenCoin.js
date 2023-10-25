const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoincSmOIH5 = await EdenCoin.new({from: accounts[1]});
		const uintA9j7Hp = BigInt("2019")
		const addressCUfrDPK = accounts[5]
		const addressCSeN4mq = accounts[1]
		const uinttxuMFaj = BigInt("1921")
		const address2AdMqS = accounts[5]
		const uintVaibGe = BigInt("658")
		const addressvtnMjo = accounts[3]
		const addressdKvJ6o4 = accounts[3]
//		const boolwyobsKt = await EdenCoincSmOIH5.transferFrom.call(addressCSeN4mq, addressCUfrDPK, uintA9j7Hp, {from: accounts[3]});
//		const boolxG1tyRZ = await EdenCoincSmOIH5.transfer.call(address2AdMqS, uinttxuMFaj, {from: accounts[0]});
//		const boolAPF1zTC = await EdenCoincSmOIH5.transferFrom.call(addressdKvJ6o4, addressvtnMjo, uintVaibGe, {from: accounts[4]});

		await expect(EdenCoincSmOIH5.transferFrom.call(addressCSeN4mq, addressCUfrDPK, uintA9j7Hp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinHqG6BqD = await EdenCoin.new({from: accounts[2]});
		const uintZO7J5kl = BigInt("110")
		const addressmu9KEt = accounts[3]
		const uintsMszhd6 = BigInt("718")
		const addressjJQBCQD = accounts[2]
		const addressFXDF05I = accounts[2]
		const uintlh6Lr7f = BigInt("983")
		const addresslk3mFB6 = accounts[4]
		const addresslLKVAlV = accounts[3]
		const addresssTtwl9z = accounts[4]
		const addressfFqvjyA = accounts[4]
		const boolsiscJJk = await EdenCoinHqG6BqD.approve.call(addressmu9KEt, uintZO7J5kl, {from: accounts[4]});
//		const boolSAkBDbx = await EdenCoinHqG6BqD.transferFrom.call(addressFXDF05I, addressjJQBCQD, uintsMszhd6, {from: accounts[0]});
//		const boolD27sMaK = await EdenCoinHqG6BqD.transferFrom.call(addresslLKVAlV, addresslk3mFB6, uintlh6Lr7f, {from: accounts[5]});
//		const uint256oI5Kkb0 = await EdenCoinHqG6BqD.allowance.call(addressfFqvjyA, addresssTtwl9z, {from: accounts[3]});

		assert.equal(boolsiscJJk, true)
		await expect(EdenCoinHqG6BqD.transferFrom.call(addressFXDF05I, addressjJQBCQD, uintsMszhd6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinx6anpvA = await EdenCoin.new({from: accounts[0]});
		const addressWGfc8kY = accounts[2]
		const addressg6UMWDz = accounts[0]
		const uintokEsIhM = BigInt("237")
		const addressMY5cnY = accounts[2]
		const uintC6ma53J = BigInt("717")
		const addresszJb2Nv5 = accounts[4]
		const addressoBRl0B = accounts[2]
		const addresswzgAhYh = "0x0000000000000000000000000000000000000001"
		const addressTWTNSd = accounts[4]
		const uint256vo7KN7M = await EdenCoinx6anpvA.allowance.call(addressg6UMWDz, addressWGfc8kY, {from: accounts[1]});
//		const boolXYAVik9 = await EdenCoinx6anpvA.transfer.call(addressMY5cnY, uintokEsIhM, {from: accounts[1]});
//		const boolB2ynAtp = await EdenCoinx6anpvA.transferFrom.call(addressoBRl0B, addresszJb2Nv5, uintC6ma53J, {from: accounts[5]});
//		const uint256g1hs2jp = await EdenCoinx6anpvA.allowance.call(addressTWTNSd, addresswzgAhYh, {from: accounts[5]});

		assert.equal(uint256vo7KN7M, BigInt("0"))
		await expect(EdenCoinx6anpvA.transfer.call(addressMY5cnY, uintokEsIhM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinFzOwU2 = await EdenCoin.new({from: accounts[0]});
		const addressQ8aCALg = "0x0000000000000000000000000000000000000001"
		const addressqKVxqNd = accounts[2]
		const addresssqCsgJn = "0x0000000000000000000000000000000000000001"
		const addressIZXPrbk = accounts[3]
		const uintizqAyHa = BigInt("1551")
		const addresshYsQUuv = accounts[3]
		const uintRfhib3U = BigInt("1983")
		const addressrH3FPJe = accounts[3]
		const uint256eAq0NU = await EdenCoinFzOwU2.balanceOf.call(addressQ8aCALg, {from: accounts[5]});
		const uint256lAdtTUa = await EdenCoinFzOwU2.balanceOf.call(addressqKVxqNd, {from: accounts[2]});
		const uint256otdGPC = await EdenCoinFzOwU2.allowance.call(addressIZXPrbk, addresssqCsgJn, {from: accounts[2]});
		const boolqGeAKUh = await EdenCoinFzOwU2.approve.call(addresshYsQUuv, uintizqAyHa, {from: accounts[0]});
		const booleGeIqIt = await EdenCoinFzOwU2.approve.call(addressrH3FPJe, uintRfhib3U, {from: accounts[0]});

		assert.equal(booleGeIqIt, true)
		assert.equal(boolqGeAKUh, true)
		assert.equal(uint256eAq0NU, BigInt("0"))
		assert.equal(uint256lAdtTUa, BigInt("0"))
		assert.equal(uint256otdGPC, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinhQQmH1u = await EdenCoin.new({from: accounts[4]});
		const uintdakVHj = BigInt("1633")
		const addressfKPtFb = accounts[0]
		const uintMue76zY = BigInt("937")
		const addresstBH3jI = accounts[4]
		const boolH4aT8SV = await EdenCoinhQQmH1u.increaseApproval.call(addressfKPtFb, uintdakVHj, {from: "0x0000000000000000000000000000000000000001"});
		const booloXRFOxh = await EdenCoinhQQmH1u.approve.call(addresstBH3jI, uintMue76zY, {from: accounts[4]});

		assert.equal(boolH4aT8SV, true)
		assert.equal(booloXRFOxh, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinjaO13CF = await EdenCoin.new({from: accounts[3]});
		const uintSKw3UW1 = BigInt("2006")
		const addressF4zBPc = accounts[0]
		const uintQBPqFcM = BigInt("1580")
		const addressxmc8UIU = accounts[0]
		const boolXWNfY5a = await EdenCoinjaO13CF.decreaseApproval.call(addressF4zBPc, uintSKw3UW1, {from: accounts[4]});
//		const boolYArqtJU = await EdenCoinjaO13CF.transfer.call(addressxmc8UIU, uintQBPqFcM, {from: accounts[4]});

		assert.equal(boolXWNfY5a, true)
		await expect(EdenCoinjaO13CF.transfer.call(addressxmc8UIU, uintQBPqFcM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinkrcXYsI = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDX44mR9 = BigInt("25")
		const addressIwDoE0 = accounts[5]
		const uintV7TlDxK = BigInt("984")
		const addressYnkgRSJ = accounts[5]
		const uintK5RcBEr = BigInt("1007")
		const addressoOHDw5N = accounts[3]
		const addressIrGJB1Z = accounts[4]
		const uintmoC1BCy = BigInt("691")
		const addressP4CKd7e = accounts[3]
		const boolvNhpIOh = await EdenCoinkrcXYsI.transfer.call(addressIwDoE0, uintDX44mR9, {from: accounts[1]});
		const boolG31STrD = await EdenCoinkrcXYsI.increaseApproval.call(addressYnkgRSJ, uintV7TlDxK, {from: accounts[4]});
		const booljLwZC4s = await EdenCoinkrcXYsI.transferFrom.call(addressIrGJB1Z, addressoOHDw5N, uintK5RcBEr, {from: accounts[3]});
		const boolA2TexMc = await EdenCoinkrcXYsI.transfer.call(addressP4CKd7e, uintmoC1BCy, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinjaO13CF = await EdenCoin.new({from: accounts[3]});
		const uintMY8rRBm = BigInt("1375")
		const addressyOfyTLJ = accounts[0]
		const uintTiBvw2 = BigInt("1215")
		const addressva0uHZx = accounts[0]
		const uintMV1FVI = BigInt("445")
		const addressg21OQv6 = accounts[3]
		const uintY8iEmhk = BigInt("1770")
		const addressFz2LgGe = accounts[0]
		const uintMie1GTd = BigInt("0")
		const address57q0WV = accounts[2]
		const boolFyVoWnR = await EdenCoinjaO13CF.increaseApproval.call(addressyOfyTLJ, uintMY8rRBm, {from: "0x0000000000000000000000000000000000000001"});
		const booliKSamep = await EdenCoinjaO13CF.approve.call(addressva0uHZx, uintTiBvw2, {from: accounts[3]});
		const boolcJzFAs = await EdenCoinjaO13CF.approve.call(addressg21OQv6, uintMV1FVI, {from: accounts[0]});
		const boolyNoXszR = await EdenCoinjaO13CF.approve.call(addressFz2LgGe, uintY8iEmhk, {from: accounts[1]});
		const boolVwGT9js = await EdenCoinjaO13CF.decreaseApproval.call(address57q0WV, uintMie1GTd, {from: accounts[1]});

		assert.equal(boolFyVoWnR, true)
		assert.equal(boolVwGT9js, true)
		assert.equal(boolcJzFAs, true)
		assert.equal(booliKSamep, true)
		assert.equal(boolyNoXszR, true)
	});
})