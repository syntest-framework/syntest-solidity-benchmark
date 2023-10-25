const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancejX1EY0y = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintqJoDKeI = BigInt("1112")
		const addressPArZPKg = accounts[5]
		const addressARPxONO = accounts[1]
		const boolO3nZWmL = await Straight_Fire_FinancejX1EY0y.transferFrom.call(addressARPxONO, addressPArZPKg, uintqJoDKeI, {from: accounts[3]});
		const uint256c63tsB7 = await Straight_Fire_FinancejX1EY0y.totalSupply.call({from: accounts[4]});
		const uint256PLO3rvQ = await Straight_Fire_FinancejX1EY0y.totalSupply.call({from: accounts[4]});

		assert.equal(boolO3nZWmL, false)
		assert.equal(uint256PLO3rvQ, BigInt("80000000000000000000000"))
		assert.equal(uint256c63tsB7, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancerChyKQD = await Straight_Fire_Finance.new({from: accounts[3]});
		const addressjNpsR9J = accounts[4]
		const addresswaJKCrv = accounts[2]
		const addressPsowLgX = accounts[1]
		const addressEd2zxsF = accounts[0]
		const uintVDPsWwo = await Straight_Fire_FinancerChyKQD.allowance.call(addresswaJKCrv, addressjNpsR9J, {from: accounts[5]});
		const uintO1AZYil = await Straight_Fire_FinancerChyKQD.allowance.call(addressEd2zxsF, addressPsowLgX, {from: accounts[3]});

		assert.equal(uintO1AZYil, BigInt("0"))
		assert.equal(uintVDPsWwo, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceBAKcoVD = await Straight_Fire_Finance.new({from: accounts[3]});
		const addresszUfj5Qb = accounts[0]
		const addressFmE9d6f = accounts[2]
		const uintzXaEYVX = BigInt("1619")
		const addressHMP0AAP = accounts[1]
		const addressDVOBphx = accounts[3]
		const uintjsy8BU = BigInt("55")
		const addressr8bnLqc = accounts[3]
		const addressYkkHI9 = "0x0000000000000000000000000000000000000001"
		const addressCqNT3jr = accounts[2]
		const uintR4qERA5 = await Straight_Fire_FinanceBAKcoVD.allowance.call(addressFmE9d6f, addresszUfj5Qb, {from: accounts[3]});
		const boolQVzni6P = await Straight_Fire_FinanceBAKcoVD.transferFrom.call(addressDVOBphx, addressHMP0AAP, uintzXaEYVX, {from: "0x0000000000000000000000000000000000000001"});
		const boolh9GkR3 = await Straight_Fire_FinanceBAKcoVD.approve.call(addressr8bnLqc, uintjsy8BU, {from: accounts[3]});
		const uintXQZXxvw = await Straight_Fire_FinanceBAKcoVD.allowance.call(addressCqNT3jr, addressYkkHI9, {from: accounts[2]});

		assert.equal(boolQVzni6P, false)
		assert.equal(boolh9GkR3, true)
		assert.equal(uintR4qERA5, BigInt("0"))
		assert.equal(uintXQZXxvw, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceDcIFCj = await Straight_Fire_Finance.new({from: accounts[2]});
		const addressGa6eDGy = accounts[0]
		const uintbtXSmkH = BigInt("1972")
		const addressIf0PBiN = accounts[3]
		const addressFInvIc = accounts[0]
		const uint256gpNp8Ow = await Straight_Fire_FinanceDcIFCj.balanceOf.call(addressGa6eDGy, {from: accounts[2]});
		const boolhAUMOSh = await Straight_Fire_FinanceDcIFCj.transfer.call(addressIf0PBiN, uintbtXSmkH, {from: accounts[1]});
		const uint256cJK44Ww = await Straight_Fire_FinanceDcIFCj.balanceOf.call(addressFInvIc, {from: accounts[2]});

		assert.equal(boolhAUMOSh, false)
		assert.equal(uint256cJK44Ww, BigInt("0"))
		assert.equal(uint256gpNp8Ow, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceHGNbHP4 = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressycvpyyA = accounts[2]
		const address2479KR = accounts[0]
		const addressYFV5D4 = "0x0000000000000000000000000000000000000001"
		const addressF4SmVhj = accounts[2]
		const addressm6a2YXQ = accounts[5]
		const uint7W0cLI = BigInt("1043")
		const addressRm8PNO1 = accounts[3]
		const uintovAlntV = await Straight_Fire_FinanceHGNbHP4.allowance.call(address2479KR, addressycvpyyA, {from: accounts[3]});
		const uintjX8rE9X = await Straight_Fire_FinanceHGNbHP4.allowance.call(addressF4SmVhj, addressYFV5D4, {from: accounts[2]});
		const uint256pIyw29j = await Straight_Fire_FinanceHGNbHP4.balanceOf.call(addressm6a2YXQ, {from: accounts[3]});
		const booluphXi71 = await Straight_Fire_FinanceHGNbHP4.approve.call(addressRm8PNO1, uint7W0cLI, {from: accounts[1]});
	});
})