const IERC20 = artifacts.require("IERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC20', (accounts) => {
	it('test for IERC20', async () => {
		const contractRhSvsHR = await IERC20.new({from: accounts[3]});
		const spenderTmISQ9i = accounts[4]
		const ownerBT4g9QO = accounts[2]
		const valuendm2oSR = BigInt("1110")
		const spenderRKns3K4 = accounts[2]
		const valueiigRds = BigInt("642")
		const topvfw5NU = accounts[1]
		const from9fM1D6 = accounts[0]
		const valueI03FDe = BigInt("1603")
		const spenderKA2e2LF = accounts[0]
		const spendergN42Wbz = accounts[5]
		const ownerF9JV4P9 = accounts[1]
		const nullHXnn6Q = await contractRhSvsHR.allowance.call(ownerBT4g9QO, spenderTmISQ9i, {from: accounts[1]});
		const nullAtrZQTC = await contractRhSvsHR.approve.call(spenderRKns3K4, valuendm2oSR, {from: accounts[4]});
		const nullMf9WNg2 = await contractRhSvsHR.transferFrom.call(from9fM1D6, topvfw5NU, valueiigRds, {from: "0x0000000000000000000000000000000000000001"});
		const nulllLwFoQl = await contractRhSvsHR.approve.call(spenderKA2e2LF, valueI03FDe, {from: accounts[1]});
		const nullwhyYt1k = await contractRhSvsHR.allowance.call(ownerF9JV4P9, spendergN42Wbz, {from: accounts[5]});
	});
})