const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancexGzIhhj = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintkPrmTDD = BigInt("1826")
		const addressEPJt0iy = accounts[0]
		const addressMr9AgE = accounts[2]
		const uintma59nFl = BigInt("113")
		const addressQdQhvz4 = accounts[3]
		const addresshDdxYFE = accounts[0]
		const addressat3nlAr = accounts[4]
		const addressKjxZhpf = accounts[2]
		const addressAhGOnrw = accounts[2]
		const uintNLzuXjY = BigInt("700")
		const addresstk0k5fy = accounts[2]
		const boolpKytEYx = await Straight_Fire_FinancexGzIhhj.transferFrom.call(addressMr9AgE, addressEPJt0iy, uintkPrmTDD, {from: accounts[1]});
		const boolhMDPmtc = await Straight_Fire_FinancexGzIhhj.transfer.call(addressQdQhvz4, uintma59nFl, {from: accounts[2]});
		const uintcBEtNpY = await Straight_Fire_FinancexGzIhhj.allowance.call(addressat3nlAr, addresshDdxYFE, {from: accounts[0]});
		const uintBFi2NEq = await Straight_Fire_FinancexGzIhhj.allowance.call(addressAhGOnrw, addressKjxZhpf, {from: accounts[1]});
		const boolVYEWmh = await Straight_Fire_FinancexGzIhhj.transfer.call(addresstk0k5fy, uintNLzuXjY, {from: accounts[1]});

		assert.equal(boolVYEWmh, false)
		assert.equal(boolhMDPmtc, true)
		assert.equal(boolpKytEYx, false)
		assert.equal(uintBFi2NEq, BigInt("0"))
		assert.equal(uintcBEtNpY, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancesUaYuES = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintto23eCc = BigInt("1922")
		const addresswm6AQuQ = accounts[3]
		const addressKk8Bko = accounts[2]
		const addressJUHHtZI = accounts[0]
		const addresstkeCT5 = accounts[1]
		const addressHC5RVAj = accounts[5]
		const uintlzrgDmu = BigInt("1559")
		const addressmhGzgJQ = accounts[3]
		const addressL3d5OzG = accounts[1]
		const boolyXAYZuI = await Straight_Fire_FinancesUaYuES.transferFrom.call(addressKk8Bko, addresswm6AQuQ, uintto23eCc, {from: accounts[3]});
		const uint256Tys3mau = await Straight_Fire_FinancesUaYuES.balanceOf.call(addressJUHHtZI, {from: accounts[2]});
		const uintFxUM90T = await Straight_Fire_FinancesUaYuES.allowance.call(addressHC5RVAj, addresstkeCT5, {from: accounts[0]});
		const boolJzeE3SB = await Straight_Fire_FinancesUaYuES.approve.call(addressmhGzgJQ, uintlzrgDmu, {from: accounts[0]});
		const uint2569vxqLR = await Straight_Fire_FinancesUaYuES.balanceOf.call(addressL3d5OzG, {from: accounts[0]});

		assert.equal(boolJzeE3SB, true)
		assert.equal(boolyXAYZuI, false)
		assert.equal(uint2569vxqLR, BigInt("0"))
		assert.equal(uint256Tys3mau, BigInt("0"))
		assert.equal(uintFxUM90T, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancekDqNOYE = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqaLHODL = BigInt("523")
		const addressxuj39gJ = accounts[4]
		const uinthpyQjJ = BigInt("1055")
		const addressamMnn0O = accounts[4]
		const address0oLPBq = accounts[1]
		const uint256OqolT9o = await Straight_Fire_FinancekDqNOYE.totalSupply.call({from: accounts[5]});
		const boolvsEUw1U = await Straight_Fire_FinancekDqNOYE.transfer.call(addressxuj39gJ, uintqaLHODL, {from: accounts[2]});
		const boolLOb5pLv = await Straight_Fire_FinancekDqNOYE.transferFrom.call(address0oLPBq, addressamMnn0O, uinthpyQjJ, {from: accounts[4]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceHOorb5B = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintNjXjMAD = BigInt("1971")
		const addressgsylaLo = accounts[2]
		const addressQ9ghG74 = accounts[0]
		const uintSpTbMqF = BigInt("143")
		const addressyqGE669 = accounts[3]
		const addresstF5KihS = accounts[4]
		const addressh0KEBU = accounts[1]
		const boolNHFrroM = await Straight_Fire_FinanceHOorb5B.transferFrom.call(addressQ9ghG74, addressgsylaLo, uintNjXjMAD, {from: accounts[5]});
		const boolAFUgaj = await Straight_Fire_FinanceHOorb5B.transfer.call(addressyqGE669, uintSpTbMqF, {from: accounts[3]});
		const uint256DnYhhXi = await Straight_Fire_FinanceHOorb5B.totalSupply.call({from: accounts[1]});
		const uintKEyT9cw = await Straight_Fire_FinanceHOorb5B.allowance.call(addressh0KEBU, addresstF5KihS, {from: accounts[2]});

		assert.equal(boolAFUgaj, false)
		assert.equal(boolNHFrroM, false)
		assert.equal(uint256DnYhhXi, BigInt("80000000000000000000000"))
		assert.equal(uintKEyT9cw, BigInt("0"))
	});
})