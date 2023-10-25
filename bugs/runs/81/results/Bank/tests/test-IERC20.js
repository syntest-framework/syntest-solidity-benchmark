const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractANS2O8x = await IERC20.new({from: accounts[4]});
		const valuetAoA8Y2 = BigInt("334")
		const toSVnU8Wy = accounts[0]
		const spenderkrNHLk0 = accounts[0]
		const ownernfmmdJ = accounts[3]
		const valueowNrcN = BigInt("1865")
		const tomWwJydV = accounts[0]
		const valuegjurQo5 = BigInt("1058")
		const spenderUqDBkB = accounts[2]
		const spenderO0XkRn = "0x0000000000000000000000000000000000000001"
		const ownerLPpjNVS = accounts[1]
		const spenderNzQj2oh = accounts[4]
		const ownerPriDi9D = accounts[5]
		const nullXSuxbaM = await contractANS2O8x.transfer.call(toSVnU8Wy, valuetAoA8Y2, {from: accounts[1]});
		const nullaEMHuNH = await contractANS2O8x.allowance.call(ownernfmmdJ, spenderkrNHLk0, {from: accounts[1]});
		const nulldOzLDea = await contractANS2O8x.transfer.call(tomWwJydV, valueowNrcN, {from: accounts[1]});
		const null1R30kB = await contractANS2O8x.approve.call(spenderUqDBkB, valuegjurQo5, {from: accounts[0]});
		const nullwamneEV = await contractANS2O8x.allowance.call(ownerLPpjNVS, spenderO0XkRn, {from: accounts[5]});
		const nullAq19IH = await contractANS2O8x.allowance.call(ownerPriDi9D, spenderNzQj2oh, {from: accounts[4]});
	});
})