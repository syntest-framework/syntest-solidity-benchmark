const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinQFJu2DI = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBJBjNSh = BigInt("1625")
		const addressfZTFsU = accounts[4]
		const addressAnZM57 = accounts[0]
		const addressOF0x96 = accounts[5]
		const uintaSQol9 = BigInt("651")
		const addressxumSCLX = accounts[4]
		const uintJdKuxhV = BigInt("552")
		const addressNiJnAvU = accounts[2]
		const boolTz09UUA = await EdenCoinQFJu2DI.decreaseApproval.call(addressfZTFsU, uintBJBjNSh, {from: accounts[3]});
		const uint256CylK7Mq = await EdenCoinQFJu2DI.allowance.call(addressOF0x96, addressAnZM57, {from: accounts[1]});
		const boolguUdEuk = await EdenCoinQFJu2DI.increaseApproval.call(addressxumSCLX, uintaSQol9, {from: accounts[3]});
		const boolLpX8gzy = await EdenCoinQFJu2DI.approve.call(addressNiJnAvU, uintJdKuxhV, {from: accounts[3]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinTrRVXG = await EdenCoin.new({from: accounts[1]});
		const uintfpGhE7r = BigInt("352")
		const addressViDoBxI = accounts[0]
		const addressJzIQaOi = accounts[2]
		const uintPasBHsy = BigInt("1925")
		const addressgYN1mGp = accounts[1]
		const uintuBPeuEu = BigInt("192")
		const addresscEYwMwv = accounts[2]
		const boolya5ovp6 = await EdenCoinTrRVXG.transferFrom.call(addressJzIQaOi, addressViDoBxI, uintfpGhE7r, {from: accounts[3]});
		const boolsfDMiuO = await EdenCoinTrRVXG.decreaseApproval.call(addressgYN1mGp, uintPasBHsy, {from: accounts[0]});
		const boolzwvUZTd = await EdenCoinTrRVXG.increaseApproval.call(addresscEYwMwv, uintuBPeuEu, {from: accounts[3]});

		await expect(EdenCoinTrRVXG.transferFrom.call(addressJzIQaOi, addressViDoBxI, uintfpGhE7r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoindYOMB5k = await EdenCoin.new({from: accounts[1]});
		const uintXDn21Sr = BigInt("531")
		const addressiSnXMF7 = accounts[1]
		const uintadVvLHP = BigInt("1515")
		const address7Yv36r = accounts[5]
		const addresszp6FOkz = accounts[1]
		const addressCmI4NXe = accounts[3]
		const addressCb4Dufd = accounts[0]
		const uintfv3xim = BigInt("1186")
		const addressyNreYGM = accounts[5]
		const uintnOVNmRG = BigInt("206")
		const addressUYxvpU3 = accounts[4]
		const booljHRjgn = await EdenCoindYOMB5k.increaseApproval.call(addressiSnXMF7, uintXDn21Sr, {from: accounts[2]});
		const boolnJ864jz = await EdenCoindYOMB5k.transferFrom.call(addresszp6FOkz, address7Yv36r, uintadVvLHP, {from: accounts[0]});
		const uint256rKfv4HQ = await EdenCoindYOMB5k.allowance.call(addressCb4Dufd, addressCmI4NXe, {from: accounts[2]});
		const boolqMgWnV = await EdenCoindYOMB5k.approve.call(addressyNreYGM, uintfv3xim, {from: "0x0000000000000000000000000000000000000001"});
		const boolB7wv6FN = await EdenCoindYOMB5k.approve.call(addressUYxvpU3, uintnOVNmRG, {from: accounts[5]});

		assert.equal(booljHRjgn, true)
		await expect(EdenCoindYOMB5k.transferFrom.call(addresszp6FOkz, address7Yv36r, uintadVvLHP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOj1iJR9 = await EdenCoin.new({from: accounts[2]});
		const uintc3vZDsd = BigInt("778")
		const addressd8QMRRT = accounts[4]
		const uintQVpcvi3 = BigInt("1813")
		const addresspUQzsQF = accounts[3]
		const boolIwvFDmK = await EdenCoinOj1iJR9.increaseApproval.call(addressd8QMRRT, uintc3vZDsd, {from: accounts[4]});
		const booldohpN5w = await EdenCoinOj1iJR9.transfer.call(addresspUQzsQF, uintQVpcvi3, {from: accounts[5]});

		assert.equal(boolIwvFDmK, true)
		await expect(EdenCoinOj1iJR9.transfer.call(addresspUQzsQF, uintQVpcvi3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinkzjXwq = await EdenCoin.new({from: accounts[1]});
		const addressEJSlwsc = accounts[0]
		const addresst1JWP08 = accounts[0]
		const uintEfHmisy = BigInt("2023")
		const addressbPo0Q6I = accounts[3]
		const addressjtWE3HX = accounts[3]
		const addressY0ZuTc6 = accounts[3]
		const uintphDuE6J = BigInt("1358")
		const addressENFrZjs = accounts[4]
		const uint256miOox0T = await EdenCoinkzjXwq.allowance.call(addresst1JWP08, addressEJSlwsc, {from: accounts[3]});
		const boolc5jJqeP = await EdenCoinkzjXwq.increaseApproval.call(addressbPo0Q6I, uintEfHmisy, {from: accounts[4]});
		const uint256d8JbQGs = await EdenCoinkzjXwq.allowance.call(addressY0ZuTc6, addressjtWE3HX, {from: accounts[0]});
		const boolCBF0YMe = await EdenCoinkzjXwq.approve.call(addressENFrZjs, uintphDuE6J, {from: accounts[1]});

		assert.equal(boolCBF0YMe, true)
		assert.equal(boolc5jJqeP, true)
		assert.equal(uint256d8JbQGs, BigInt("0"))
		assert.equal(uint256miOox0T, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOj1iJR9 = await EdenCoin.new({from: accounts[2]});
		const uintjEJvRp8 = BigInt("778")
		const addressQI4F9HR = accounts[4]
		const addressHKL9htX = accounts[1]
		const uintFeapy3r = BigInt("1813")
		const addressdt1rS9z = accounts[3]
		const boolIwvFDmK = await EdenCoinOj1iJR9.increaseApproval.call(addressQI4F9HR, uintjEJvRp8, {from: accounts[4]});
		const uint256uCqH7ZI = await EdenCoinOj1iJR9.balanceOf.call(addressHKL9htX, {from: accounts[0]});
		const booldohpN5w = await EdenCoinOj1iJR9.transfer.call(addressdt1rS9z, uintFeapy3r, {from: accounts[5]});

		assert.equal(boolIwvFDmK, true)
		assert.equal(uint256uCqH7ZI, BigInt("0"))
		await expect(EdenCoinOj1iJR9.transfer.call(addressdt1rS9z, uintFeapy3r, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinOj1iJR9 = await EdenCoin.new({from: accounts[2]});
		const uintrmoO0dl = BigInt("1929")
		const addresspNaRKU = accounts[2]
		const uintuEDWc92 = BigInt("1807")
		const addresstr72D2t = accounts[3]
		const boolh6A1j9b = await EdenCoinOj1iJR9.decreaseApproval.call(addresspNaRKU, uintrmoO0dl, {from: accounts[1]});
		const booldohpN5w = await EdenCoinOj1iJR9.transfer.call(addresstr72D2t, uintuEDWc92, {from: accounts[5]});

		assert.equal(boolh6A1j9b, true)
		await expect(EdenCoinOj1iJR9.transfer.call(addresstr72D2t, uintuEDWc92, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoiniWsuvta = await EdenCoin.new({from: accounts[4]});
		const uintphaApot = BigInt("0")
		const addressYctFf5w = accounts[4]
		const uintQwJTKIM = BigInt("1368")
		const addressTN6nLNc = accounts[2]
		const addressjZWot3a = accounts[4]
		const uintxhXtMxP = BigInt("1870")
		const addressGY4ngA0 = accounts[0]
		const addressKrbHfbA = accounts[4]
		const uintiLvGInt = BigInt("1817")
		const addresscB5K5QF = accounts[3]
		const boolX8ihnk = await EdenCoiniWsuvta.decreaseApproval.call(addressYctFf5w, uintphaApot, {from: accounts[1]});
		const boolO8tCnea = await EdenCoiniWsuvta.transferFrom.call(addressjZWot3a, addressTN6nLNc, uintQwJTKIM, {from: accounts[1]});
		const boolgArK3OB = await EdenCoiniWsuvta.approve.call(addressGY4ngA0, uintxhXtMxP, {from: accounts[1]});
		const uint256wHHwAw5 = await EdenCoiniWsuvta.balanceOf.call(addressKrbHfbA, {from: accounts[1]});
		const boolHllEXdY = await EdenCoiniWsuvta.increaseApproval.call(addresscB5K5QF, uintiLvGInt, {from: accounts[0]});

		assert.equal(boolX8ihnk, true)
		await expect(EdenCoiniWsuvta.transferFrom.call(addressjZWot3a, addressTN6nLNc, uintQwJTKIM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})