const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEG03GLJt = await REXUNIFINANCE.new({from: accounts[4]});
		const uintzvY9qXD = BigInt("1320")
		const addressqneCFsP = accounts[4]
		const addressIDdlyGZ = accounts[2]
		const uintQX1xOpI = BigInt("1759")
		const addressI2qTzi = "0x0000000000000000000000000000000000000001"
		const addressghS45Ut = accounts[2]
		const addressaq0uAUK = accounts[1]
//		const bool1kV4Nj = await REXUNIFINANCEG03GLJt.transferFrom.call(addressIDdlyGZ, addressqneCFsP, uintzvY9qXD, {from: accounts[0]});
//		const boolgjwDH3o = await REXUNIFINANCEG03GLJt.transfer.call(addressI2qTzi, uintQX1xOpI, {from: accounts[1]});
//		const uint256GATqNT5 = await REXUNIFINANCEG03GLJt.transferableTokens.call(addressghS45Ut, {from: accounts[5]});
//		const uint256dWS9SJB = await REXUNIFINANCEG03GLJt.balanceOf.call(addressaq0uAUK, {from: accounts[1]});

		await expect(REXUNIFINANCEG03GLJt.transferFrom.call(addressIDdlyGZ, addressqneCFsP, uintzvY9qXD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEkRUijvG = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxJgJGn0 = accounts[2]
		const uintuup5zWm = BigInt("1962")
		const addresslzlYrwR = accounts[0]
		const uintcGXowRb = BigInt("297")
		const addresswa9hr9Y = accounts[3]
		const uint256yMzaLdL = await REXUNIFINANCEkRUijvG.balanceOf.call(addressxJgJGn0, {from: "0x0000000000000000000000000000000000000001"});
		const bool6F9Iaf = await REXUNIFINANCEkRUijvG.increaseApproval.call(addresslzlYrwR, uintuup5zWm, {from: accounts[1]});
		const boolZ6uTux1 = await REXUNIFINANCEkRUijvG.transfer.call(addresswa9hr9Y, uintcGXowRb, {from: accounts[3]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCErtajiZx = await REXUNIFINANCE.new({from: accounts[1]});
		const uinttksrBGq = BigInt("455")
		const addresswRL0WbX = accounts[3]
		const uintpXB54wO = BigInt("1717")
		const addressRZt7Adz = "0x0000000000000000000000000000000000000001"
		const addresss9NMboy = accounts[4]
//		const boolWqnZLTx = await REXUNIFINANCErtajiZx.transfer.call(addresswRL0WbX, uinttksrBGq, {from: accounts[0]});
//		const boolUc1wmCh = await REXUNIFINANCErtajiZx.approve.call(addressRZt7Adz, uintpXB54wO, {from: accounts[0]});
//		const addressK38ZbNu = await REXUNIFINANCErtajiZx.transferOwnership.call(addresss9NMboy, {from: accounts[0]});

		await expect(REXUNIFINANCErtajiZx.transfer.call(addresswRL0WbX, uinttksrBGq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEnlGGhx = await REXUNIFINANCE.new({from: accounts[1]});
		const uintvbqwyes = BigInt("1926")
		const addressMFKRdPF = accounts[2]
		const addressfhGx5yR = accounts[4]
		const addressP3Fripj = accounts[1]
		const addressVqrqyaO = accounts[0]
//		const boolhv3lbL = await REXUNIFINANCEnlGGhx.approve.call(addressMFKRdPF, uintvbqwyes, {from: accounts[2]});
//		const uint256ubtZ5mH = await REXUNIFINANCEnlGGhx.allowance.call(addressP3Fripj, addressfhGx5yR, {from: accounts[2]});
//		const uint256q46sU2v = await REXUNIFINANCEnlGGhx.balanceOf.call(addressVqrqyaO, {from: accounts[1]});

		await expect(REXUNIFINANCEnlGGhx.approve.call(addressMFKRdPF, uintvbqwyes, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEn5yCusf = await REXUNIFINANCE.new({from: accounts[4]});
		const uintZbZuFhh = BigInt("1752")
		const addressmaRvDe = accounts[1]
		const uintK8bIDGi = BigInt("1504")
		const addressIYBKSJ4 = accounts[3]
		const uintM1LPZIS = BigInt("1622")
		const addressXET9dd6 = accounts[2]
		const uintpZgMZ0w = BigInt("1077")
		const addressM11ItPo = accounts[1]
		const addressnRnH24 = accounts[0]
		const addressIZ5BaMV = "0x0000000000000000000000000000000000000001"
		const uintK3GDxfj = BigInt("1849")
		const addressWRtFwWX = accounts[4]
		const boolmMMvZk2 = await REXUNIFINANCEn5yCusf.approve.call(addressmaRvDe, uintZbZuFhh, {from: accounts[2]});
//		const boolUPLHFxh = await REXUNIFINANCEn5yCusf.transfer.call(addressIYBKSJ4, uintK8bIDGi, {from: accounts[4]});
//		const boolv59QYCl = await REXUNIFINANCEn5yCusf.increaseApproval.call(addressXET9dd6, uintM1LPZIS, {from: accounts[1]});
//		const boolGAWzPx = await REXUNIFINANCEn5yCusf.transferFrom.call(addressnRnH24, addressM11ItPo, uintpZgMZ0w, {from: accounts[2]});
//		const uint256SopBqx = await REXUNIFINANCEn5yCusf.balanceOf.call(addressIZ5BaMV, {from: accounts[1]});
//		const boolNtf7ORh = await REXUNIFINANCEn5yCusf.increaseApproval.call(addressWRtFwWX, uintK3GDxfj, {from: accounts[4]});

		assert.equal(boolmMMvZk2, true)
		await expect(REXUNIFINANCEn5yCusf.transfer.call(addressIYBKSJ4, uintK8bIDGi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCExggwFLd = await REXUNIFINANCE.new({from: accounts[0]});
		const addressw872BW = accounts[0]
		const uintnQH5TNo = BigInt("342")
		const addressJWEaEl9 = accounts[5]
		const addressPiL9Aop = accounts[1]
		const uintaU7stga = BigInt("40")
		const addressBiv4sJb = accounts[3]
		const uint256jum0M8 = await REXUNIFINANCExggwFLd.transferableTokens.call(addressw872BW, {from: "0x0000000000000000000000000000000000000001"});
		const boolc9j4Guh = await REXUNIFINANCExggwFLd.approve.call(addressJWEaEl9, uintnQH5TNo, {from: accounts[1]});
		const addressaQIcUP = await REXUNIFINANCExggwFLd.transferOwnership.call(addressPiL9Aop, {from: accounts[0]});
//		const boolyU0zuG1 = await REXUNIFINANCExggwFLd.increaseApproval.call(addressBiv4sJb, uintaU7stga, {from: accounts[3]});

		assert.equal(boolc9j4Guh, true)
		assert.equal(uint256jum0M8, BigInt("0"))
		await expect(REXUNIFINANCExggwFLd.increaseApproval.call(addressBiv4sJb, uintaU7stga, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEi8IvSmf = await REXUNIFINANCE.new({from: accounts[3]});
		const uinthFBFSuh = BigInt("561")
		const addresszqUhJhI = accounts[3]
		const uintY6GXpYo = BigInt("1504")
		const addressLpoWyM2 = accounts[0]
		const uintUZCxdVY = BigInt("219")
		const addresseTfF7G = accounts[3]
		const addressOJCup66 = accounts[5]
		const addressABAd6TD = accounts[0]
		const boolIrRPyc = await REXUNIFINANCEi8IvSmf.increaseApproval.call(addresszqUhJhI, uinthFBFSuh, {from: accounts[1]});
		const boollHejjtO = await REXUNIFINANCEi8IvSmf.approve.call(addressLpoWyM2, uintY6GXpYo, {from: accounts[3]});
		const boolOAV17V4 = await REXUNIFINANCEi8IvSmf.increaseApproval.call(addresseTfF7G, uintUZCxdVY, {from: accounts[4]});
		const uint256DzZ86rV = await REXUNIFINANCEi8IvSmf.balanceOf.call(addressOJCup66, {from: accounts[1]});
		const uint256XbYCzPJ = await REXUNIFINANCEi8IvSmf.transferableTokens.call(addressABAd6TD, {from: accounts[1]});

		assert.equal(boolIrRPyc, true)
		assert.equal(boolOAV17V4, true)
		assert.equal(boollHejjtO, true)
		assert.equal(uint256DzZ86rV, BigInt("0"))
		assert.equal(uint256XbYCzPJ, BigInt("0"))
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCE7fVb3J = await REXUNIFINANCE.new({from: accounts[0]});
		const uintflWlO42 = BigInt("726")
		const addressMSkdqv3 = accounts[3]
		const uintohChs1f = BigInt("237")
		const addressjA26l7N = accounts[3]
		const boolIEe6V4I = await REXUNIFINANCE7fVb3J.approve.call(addressMSkdqv3, uintflWlO42, {from: accounts[5]});
		const boolP9FZ4o4 = await REXUNIFINANCE7fVb3J.decreaseApproval.call(addressjA26l7N, uintohChs1f, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIEe6V4I, true)
		assert.equal(boolP9FZ4o4, true)
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCExoJwiDM = await REXUNIFINANCE.new({from: accounts[5]});
		const addressYGrG2QT = accounts[3]
		const addressnvEStIj = accounts[0]
		const addressn0Z7kJC = accounts[4]
		const address0OvR0p = accounts[0]
		const uintLQmxS6t = BigInt("1650")
		const addressw4uBByw = accounts[0]
		const uint256gspi6WE = await REXUNIFINANCExoJwiDM.balanceOf.call(addressYGrG2QT, {from: accounts[0]});
		const uint256UksoC2Q = await REXUNIFINANCExoJwiDM.transferableTokens.call(addressnvEStIj, {from: accounts[0]});
		const uint256Evvbp6W = await REXUNIFINANCExoJwiDM.allowance.call(address0OvR0p, addressn0Z7kJC, {from: accounts[2]});
//		const boolO2PskNO = await REXUNIFINANCExoJwiDM.transfer.call(addressw4uBByw, uintLQmxS6t, {from: accounts[2]});

		assert.equal(uint256Evvbp6W, BigInt("0"))
		assert.equal(uint256UksoC2Q, BigInt("0"))
		assert.equal(uint256gspi6WE, BigInt("0"))
		await expect(REXUNIFINANCExoJwiDM.transfer.call(addressw4uBByw, uintLQmxS6t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})