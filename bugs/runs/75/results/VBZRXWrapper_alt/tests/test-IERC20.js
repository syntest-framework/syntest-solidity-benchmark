const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractDQpkJG = await IERC20.new({from: accounts[0]});
		const amountfPQaeAq = BigInt("1423")
		const recipientuityAqv = "0x0000000000000000000000000000000000000001"
		const senderpiUa9yB = accounts[2]
		const spenderMj6Mlom = accounts[0]
		const ownerUDiheLm = accounts[1]
		const spenderUH2IM5Y = accounts[3]
		const ownerXUpeRnS = accounts[3]
		const amountmtaTcAP = BigInt("1025")
		const recipientWA7PtXr = accounts[1]
		const amountMVRIwQu = BigInt("1813")
		const recipientmTpmpcl = accounts[1]
		const sendercSvLTr1 = accounts[4]
		const nullgFEJjs = await contractDQpkJG.transferFrom.call(senderpiUa9yB, recipientuityAqv, amountfPQaeAq, {from: accounts[2]});
		const nullw3Aiwxh = await contractDQpkJG.allowance.call(ownerUDiheLm, spenderMj6Mlom, {from: accounts[2]});
		const nulluCeBEQQ = await contractDQpkJG.allowance.call(ownerXUpeRnS, spenderUH2IM5Y, {from: accounts[0]});
		const nullERHBUsm = await contractDQpkJG.transfer.call(recipientWA7PtXr, amountmtaTcAP, {from: accounts[4]});
		const nullSWg8pd8 = await contractDQpkJG.totalSupply.call({from: accounts[1]});
		const nulllQGii2 = await contractDQpkJG.transferFrom.call(sendercSvLTr1, recipientmTpmpcl, amountMVRIwQu, {from: accounts[0]});
	});
})