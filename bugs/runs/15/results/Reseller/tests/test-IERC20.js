const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractnu96v2W = await IERC20.new({from: accounts[3]});
		const valuejyEeQed = BigInt("181")
		const spenderBuS1ylY = accounts[2]
		const valueaNIRRQh = BigInt("467")
		const tocBSVSiD = accounts[2]
		const valueQew44Y6 = BigInt("1332")
		const toao4r87F = "0x0000000000000000000000000000000000000001"
		const fromW24D4DR = accounts[2]
		const valueYeqvAKe = BigInt("852")
		const toG9tUcuL = accounts[2]
		const valuezZ3I4sX = BigInt("1572")
		const fromQ74A5Sd = accounts[0]
		const nulle7FQL6F = await contractnu96v2W.approve.call(spenderBuS1ylY, valuejyEeQed, {from: accounts[1]});
		const nullqJ49H5 = await contractnu96v2W.mint.call(tocBSVSiD, valueaNIRRQh, {from: accounts[0]});
		const nullFL7THSf = await contractnu96v2W.transferFrom.call(fromW24D4DR, toao4r87F, valueQew44Y6, {from: "0x0000000000000000000000000000000000000001"});
		const nullE8qFl4O = await contractnu96v2W.mint.call(toG9tUcuL, valueYeqvAKe, {from: accounts[0]});
		await contractnu96v2W.burnFrom.call(fromQ74A5Sd, valuezZ3I4sX, {from: accounts[5]});
		const nulluFfBXBj = await contractnu96v2W.totalSupply.call({from: accounts[0]});
	});
})