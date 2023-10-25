const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenMVLyGIy = await MIMOToken.new({from: accounts[1]});
		const addressSy0lDM3 = accounts[3]
		const addressCz6PPO1 = accounts[1]
		const uintkjzABAe = BigInt("584")
		const uintwVo0dyR = BigInt("1833")
		const uintsy1OzCz = await MIMOTokenMVLyGIy.allowance.call(addressCz6PPO1, addressSy0lDM3, {from: accounts[1]});
		const uintqDVCXfb = await MIMOTokenMVLyGIy.totalSupply.call({from: accounts[1]});
		const uint256fBDX5pS = await MIMOTokenMVLyGIy.setMinFee.call(uintkjzABAe, {from: accounts[2]});
		const uint256arQt89i = await MIMOTokenMVLyGIy.getFee.call(uintwVo0dyR, {from: accounts[4]});

		assert.equal(uint256arQt89i, BigInt("50000000000000000"))
		assert.equal(uintqDVCXfb, BigInt("16000000000000000000000000"))
		assert.equal(uintsy1OzCz, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenvJ8Akdz = await MIMOToken.new({from: accounts[4]});
		const uintr69h92i = BigInt("712")
		const uintJpKCTHj = BigInt("1268")
		const uintSsmlvn = BigInt("1535")
		const addressZUu1fZ9 = accounts[2]
		const uintCzUHwfF = BigInt("72")
		const address6wn7H9 = accounts[0]
		const addressrf9hUxO = accounts[5]
		const uintr1tX4Lp = BigInt("106")
		const addressJbgrlHX = "0x0000000000000000000000000000000000000001"
		const uint256BfdDDuR = await MIMOTokenvJ8Akdz.setFeeRate.call(uintr69h92i, {from: accounts[0]});
		const uint256NGJsVWY = await MIMOTokenvJ8Akdz.setMinFee.call(uintJpKCTHj, {from: accounts[4]});
		const boolPI17kjI = await MIMOTokenvJ8Akdz.transfer.call(addressZUu1fZ9, uintSsmlvn, {from: accounts[5]});
		const uintRRqSPI = await MIMOTokenvJ8Akdz.totalSupply.call({from: accounts[1]});
		const boolfPzTo4 = await MIMOTokenvJ8Akdz.transferFrom.call(addressrf9hUxO, address6wn7H9, uintCzUHwfF, {from: accounts[4]});
		const boolBboAEM7 = await MIMOTokenvJ8Akdz.approve.call(addressJbgrlHX, uintr1tX4Lp, {from: accounts[4]});

		await expect(MIMOTokenvJ8Akdz.transfer.call(addressZUu1fZ9, uintSsmlvn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenadfEMXM = await MIMOToken.new({from: accounts[2]});
		const uintExc24GU = BigInt("1507")
		const uintotVyDIy = BigInt("639")
		const addressuvGaHxs = accounts[1]
		const addresswvdEhn = accounts[0]
		const addressmJ1MtE = accounts[0]
		const addressicS2Quc = accounts[1]
		const uint256LYd2j3j = await MIMOTokenadfEMXM.getFee.call(uintExc24GU, {from: accounts[4]});
		const boolQkZSEvv = await MIMOTokenadfEMXM.transferFrom.call(addresswvdEhn, addressuvGaHxs, uintotVyDIy, {from: accounts[1]});
		const uintLYrfulH = await MIMOTokenadfEMXM.allowance.call(addressicS2Quc, addressmJ1MtE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256LYd2j3j, BigInt("50000000000000000"))
		await expect(MIMOTokenadfEMXM.transferFrom.call(addresswvdEhn, addressuvGaHxs, uintotVyDIy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenfYqpf6N = await MIMOToken.new({from: accounts[4]});
		const uintcpXaZHe = BigInt("622")
		const addressX0lB2i6 = accounts[2]
		const addressV51Dym = accounts[5]
		const addressZKm7DvV = accounts[1]
		const uint256DGc0ttJ = await MIMOTokenfYqpf6N.setFeeRate.call(uintcpXaZHe, {from: accounts[4]});
		const uintJmAm2Lu = await MIMOTokenfYqpf6N.allowance.call(addressV51Dym, addressX0lB2i6, {from: accounts[0]});
		const uintGSINoXR = await MIMOTokenfYqpf6N.balanceOf.call(addressZKm7DvV, {from: accounts[1]});

		assert.equal(uintGSINoXR, BigInt("0"))
		assert.equal(uintJmAm2Lu, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenjpPCWXw = await MIMOToken.new({from: accounts[3]});
		const uintnxlfvcf = BigInt("1940")
		const addressCXF54z = accounts[4]
		const addresstv5VTJc = accounts[4]
		const addressWn0aTUH = accounts[1]
		const uintW06zJB = BigInt("1061")
		const addresse6z2Cq = accounts[1]
		const addresscXhmGsf = accounts[2]
		const boolwH0scaa = await MIMOTokenjpPCWXw.approve.call(addressCXF54z, uintnxlfvcf, {from: accounts[0]});
		const uintMgsOpmJ = await MIMOTokenjpPCWXw.allowance.call(addressWn0aTUH, addresstv5VTJc, {from: accounts[2]});
		const booltRg6k2t = await MIMOTokenjpPCWXw.transferFrom.call(addresscXhmGsf, addresse6z2Cq, uintW06zJB, {from: accounts[3]});

		assert.equal(boolwH0scaa, true)
		assert.equal(uintMgsOpmJ, BigInt("0"))
		await expect(MIMOTokenjpPCWXw.transferFrom.call(addresscXhmGsf, addresse6z2Cq, uintW06zJB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})