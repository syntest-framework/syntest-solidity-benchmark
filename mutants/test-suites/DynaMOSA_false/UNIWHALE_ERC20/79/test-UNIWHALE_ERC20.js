const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20InMZ03y = await UNIWHALE_ERC20.new({from: accounts[3]});
		const address0OPTu3 = accounts[4]
		const uint256Yng8cTg = await UNIWHALE_ERC20InMZ03y.viewSale.call({from: accounts[2]});
//		const boolgqiYZ4y = await UNIWHALE_ERC20InMZ03y.tokenSale.call(address0OPTu3, {from: accounts[4]});

		await expect(UNIWHALE_ERC20InMZ03y.tokenSale.call(address0OPTu3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20m5Gc3rH = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uint256xPGsMK = await UNIWHALE_ERC20m5Gc3rH.viewSale.call({from: accounts[2]});
		const uint256VDv70O3 = await UNIWHALE_ERC20m5Gc3rH.viewAirdrop.call({from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20GOA6GL = await UNIWHALE_ERC20.new({from: accounts[0]});
		const uintkZKhOMj = BigInt("883")
		const uintK8NcD45 = BigInt("424")
		const uintBA0i6NI = BigInt("559")
		const uintO72GE7 = BigInt("1090")
		const uint256z3vskvj = await UNIWHALE_ERC20GOA6GL.startAirdrop.call(uintO72GE7, uintBA0i6NI, uintK8NcD45, uintkZKhOMj, {from: accounts[0]});
		const uint256oMbDJFl = await UNIWHALE_ERC20GOA6GL.viewSale.call({from: accounts[4]});
		const uint256ClbkpWk = await UNIWHALE_ERC20GOA6GL.viewSale.call({from: accounts[2]});
//		await UNIWHALE_ERC20GOA6GL.clearETH.call({from: accounts[3]});
//		const uint25658yzGL = await UNIWHALE_ERC20GOA6GL.viewAirdrop.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(UNIWHALE_ERC20GOA6GL.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20hqJijje = await UNIWHALE_ERC20.new({from: accounts[0]});
		const addresszhs58gf = accounts[3]
		const uintWmJl6nQ = BigInt("323")
		const uintYV7vTjZ = BigInt("198")
		const uintBRYh7cn = BigInt("136")
		const uintkkSl0si = BigInt("1564")
		const uintQA2FO18 = BigInt("1412")
//		const boolEtE9KKL = await UNIWHALE_ERC20hqJijje.getAirdrop.call(addresszhs58gf, {from: accounts[0]});
//		const uint256qFOOGJg = await UNIWHALE_ERC20hqJijje.viewAirdrop.call({from: accounts[2]});
//		const uint256NYjFznv = await UNIWHALE_ERC20hqJijje.startSale.call(uintQA2FO18, uintkkSl0si, uintBRYh7cn, uintYV7vTjZ, uintWmJl6nQ, {from: accounts[3]});
//		const uint256kpSr3vO = await UNIWHALE_ERC20hqJijje.viewAirdrop.call({from: accounts[0]});

		await expect(UNIWHALE_ERC20hqJijje.getAirdrop.call(addresszhs58gf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Q60EPdX = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbUMHg98 = BigInt("1523")
		const uintkyBpXl6 = BigInt("252")
		const uintCL1bNI = BigInt("1832")
		const uintVUBb996 = BigInt("96")
		const uintM3ACgkk = BigInt("1198")
		const uintrbxwMAW = BigInt("1765")
		const uinttepdtfg = BigInt("2027")
		const uintoc5hOuT = BigInt("730")
		const uinte2Uffpm = BigInt("148")
		const uint256zGrUCE = await UNIWHALE_ERC20Q60EPdX.startSale.call(uintM3ACgkk, uintVUBb996, uintCL1bNI, uintkyBpXl6, uintbUMHg98, {from: accounts[5]});
		const uint256ny0X5g2 = await UNIWHALE_ERC20Q60EPdX.startAirdrop.call(uinte2Uffpm, uintoc5hOuT, uinttepdtfg, uintrbxwMAW, {from: accounts[0]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20ea29sBy = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintpDo9p2o = BigInt("1416")
		const uintQOFbjzU = BigInt("1658")
		const uintQbdkvU5 = BigInt("1347")
		const uintIoTktBs = BigInt("198")
		const uintZxq96sf = BigInt("1617")
		const uint256S3IFlDa = await UNIWHALE_ERC20ea29sBy.startSale.call(uintZxq96sf, uintIoTktBs, uintQbdkvU5, uintQOFbjzU, uintpDo9p2o, {from: accounts[3]});
		const uint256evE7FSO = await UNIWHALE_ERC20ea29sBy.viewSale.call({from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20InMZ03y = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addresscGtJS60 = accounts[4]
		const uint256Yng8cTg = await UNIWHALE_ERC20InMZ03y.viewSale.call({from: accounts[2]});
//		await UNIWHALE_ERC20InMZ03y.clearETH.call({from: accounts[3]});
//		const uint256tvtQemF = await UNIWHALE_ERC20InMZ03y.viewAirdrop.call({from: accounts[3]});
//		const boolgqiYZ4y = await UNIWHALE_ERC20InMZ03y.tokenSale.call(addresscGtJS60, {from: accounts[4]});

		await expect(UNIWHALE_ERC20InMZ03y.clearETH.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})