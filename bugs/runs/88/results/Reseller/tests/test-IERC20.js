const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractCyLd4g0 = await IERC20.new({from: accounts[1]});
		const valuelOCn8Pr = BigInt("1750")
		const froma0UC94H = accounts[4]
		const valueNOlHBsQ = BigInt("54")
		const tohRhnXrJ = accounts[1]
		const valueU8IcN1D = BigInt("35")
		const toj1EvYbg = accounts[3]
		const spenderVJXE8ND = accounts[3]
		const ownermJdC9f = "0x0000000000000000000000000000000000000001"
		await contractCyLd4g0.burnFrom.call(froma0UC94H, valuelOCn8Pr, {from: accounts[1]});
		const nulli0tAlsi = await contractCyLd4g0.totalSupply.call({from: accounts[1]});
		const nullPzzh6Q4 = await contractCyLd4g0.mint.call(tohRhnXrJ, valueNOlHBsQ, {from: accounts[1]});
		const nulltCrWT0c = await contractCyLd4g0.mint.call(toj1EvYbg, valueU8IcN1D, {from: accounts[5]});
		const nulljMr08Xr = await contractCyLd4g0.allowance.call(ownermJdC9f, spenderVJXE8ND, {from: accounts[1]});
	});
})