const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractWz6alV = await IERC20.new({from: accounts[0]});
		const _valueio5karJ = BigInt("1378")
		const _toCuYUgmC = accounts[2]
		const _whopiHea2w = accounts[3]
		const _valueJ5AJdpa = BigInt("285")
		const _tow4F3EN9 = accounts[2]
		const _whof0acnte = accounts[5]
		const _valueoDyHkj = BigInt("405")
		const _toqeMClvi = "0x0000000000000000000000000000000000000001"
		const nullk7htq2J = await contractWz6alV.transfer.call(_toCuYUgmC, _valueio5karJ, {from: accounts[4]});
		const nullUQv9qlR = await contractWz6alV.balanceOf.call(_whopiHea2w, {from: accounts[0]});
		const nulld4hJCu6 = await contractWz6alV.transfer.call(_tow4F3EN9, _valueJ5AJdpa, {from: accounts[0]});
		const nullTePlAGH = await contractWz6alV.balanceOf.call(_whof0acnte, {from: accounts[1]});
		const null18nTcb = await contractWz6alV.totalSupply.call({from: accounts[4]});
		const nullzGkLOJd = await contractWz6alV.transfer.call(_toqeMClvi, _valueoDyHkj, {from: "0x0000000000000000000000000000000000000001"});
	});
})