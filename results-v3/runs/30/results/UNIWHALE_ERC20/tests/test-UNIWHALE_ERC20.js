const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20jevoVjz = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBynKb82 = BigInt("616")
		const uintk7xILtX = BigInt("392")
		const uintrfNNYLB = BigInt("738")
		const uintFCKFJ3S = BigInt("1050")
		const uinttKNtiqn = BigInt("1184")
		const addressdrhDXHW = accounts[3]
		const uintSTk7wiZ = BigInt("2038")
		const uintypXr2La = BigInt("1764")
		const uintFQVytWd = BigInt("216")
		const uintqo0pDWm = BigInt("1280")
		const uintVeN2tBO = BigInt("1068")
		const uintsWAG0Dw = BigInt("1070")
		const uintgN8osaU = BigInt("668")
		const uinttGDa9P6 = BigInt("400")
		const uintzrY1Ji = BigInt("636")
		const uintR8SvTKv = BigInt("225")
		const uint256j7zW1Rm = await UNIWHALE_ERC20jevoVjz.startSale.call(uinttKNtiqn, uintFCKFJ3S, uintrfNNYLB, uintk7xILtX, uintBynKb82, {from: accounts[2]});
		const boolLFwQQvn = await UNIWHALE_ERC20jevoVjz.tokenSale.call(addressdrhDXHW, {from: accounts[1]});
		const uint256knERHlj = await UNIWHALE_ERC20jevoVjz.startSale.call(uintVeN2tBO, uintqo0pDWm, uintFQVytWd, uintypXr2La, uintSTk7wiZ, {from: accounts[3]});
		const uint256eUrkMmw = await UNIWHALE_ERC20jevoVjz.startSale.call(uintR8SvTKv, uintzrY1Ji, uinttGDa9P6, uintgN8osaU, uintsWAG0Dw, {from: accounts[5]});
		await UNIWHALE_ERC20jevoVjz.clearETH.call({from: accounts[3]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20jJqkZ2q = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintuLOw9XO = BigInt("1661")
		const uinthKHP5E = BigInt("1174")
		const uintVU0deux = BigInt("1928")
		const uintrkGpw0G = BigInt("113")
		const uintcQ1eOw = BigInt("1292")
		const addressblNAO8r = accounts[4]
		const uint256TTjWzmV = await UNIWHALE_ERC20jJqkZ2q.startSale.call(uintcQ1eOw, uintrkGpw0G, uintVU0deux, uinthKHP5E, uintuLOw9XO, {from: accounts[1]});
		const boolEvxQkl = await UNIWHALE_ERC20jJqkZ2q.tokenSale.call(addressblNAO8r, {from: accounts[3]});
		const uint256xNDhW7U = await UNIWHALE_ERC20jJqkZ2q.viewSale.call({from: accounts[4]});
		const uint256mb3FjrZ = await UNIWHALE_ERC20jJqkZ2q.viewAirdrop.call({from: accounts[4]});

		await expect(UNIWHALE_ERC20jJqkZ2q.tokenSale.call(addressblNAO8r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20rFDddtj = await UNIWHALE_ERC20.new({from: accounts[2]});
		const addressv21CnX = accounts[3]
		const addressvjc5v8Y = accounts[3]
		const addresswcLkjzT = "0x0000000000000000000000000000000000000001"
		const uintIMDCLZH = BigInt("2012")
		const uintuiezP2a = BigInt("725")
		const uintw3ss9SK = BigInt("1805")
		const uintqCNQgaG = BigInt("126")
		const uintSXYRSXH = BigInt("83")
		const uint256Rsv6U0P = await UNIWHALE_ERC20rFDddtj.viewAirdrop.call({from: accounts[0]});
		const boolyTs1odw = await UNIWHALE_ERC20rFDddtj.getAirdrop.call(addressv21CnX, {from: accounts[1]});
		const boolrJQ63ud = await UNIWHALE_ERC20rFDddtj.getAirdrop.call(addressvjc5v8Y, {from: accounts[4]});
		const boolm0u4oug = await UNIWHALE_ERC20rFDddtj.getAirdrop.call(addresswcLkjzT, {from: accounts[3]});
		const uint256oM6GuKn = await UNIWHALE_ERC20rFDddtj.startSale.call(uintSXYRSXH, uintqCNQgaG, uintw3ss9SK, uintuiezP2a, uintIMDCLZH, {from: accounts[3]});

		await expect(UNIWHALE_ERC20rFDddtj.getAirdrop.call(addressv21CnX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Fx8N7zc = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintkbM8KkN = BigInt("982")
		const uintpsGjHtu = BigInt("1024")
		const uintHPO5Nbp = BigInt("1143")
		const uintUu4sehI = BigInt("256")
		const addressbFDjFYC = accounts[4]
		const uint256eawdbIG = await UNIWHALE_ERC20Fx8N7zc.viewSale.call({from: accounts[4]});
		await UNIWHALE_ERC20Fx8N7zc.clearETH.call({from: accounts[4]});
		const uint2565lFv16 = await UNIWHALE_ERC20Fx8N7zc.startAirdrop.call(uintUu4sehI, uintHPO5Nbp, uintpsGjHtu, uintkbM8KkN, {from: accounts[3]});
		const boolCiY5NI0 = await UNIWHALE_ERC20Fx8N7zc.tokenSale.call(addressbFDjFYC, {from: accounts[1]});

		await expect(UNIWHALE_ERC20Fx8N7zc.clearETH.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Cl0j4cr = await UNIWHALE_ERC20.new({from: accounts[1]});
		const uintIlpVGsn = BigInt("1044")
		const uintpP3JiuE = BigInt("1991")
		const uintnUf2P2c = BigInt("511")
		const uintT94dCye = BigInt("1598")
		const uintN5D17G7 = BigInt("85")
		const uintSUqZWdc = BigInt("442")
		const uintD7ZkqU = BigInt("897")
		const uintEXaU5hi = BigInt("1707")
		const uint256Man8frm = await UNIWHALE_ERC20Cl0j4cr.startAirdrop.call(uintT94dCye, uintnUf2P2c, uintpP3JiuE, uintIlpVGsn, {from: accounts[1]});
		const uint256mg7WvxE = await UNIWHALE_ERC20Cl0j4cr.startAirdrop.call(uintEXaU5hi, uintD7ZkqU, uintSUqZWdc, uintN5D17G7, {from: accounts[2]});

		await expect(UNIWHALE_ERC20Cl0j4cr.startAirdrop.call(uintEXaU5hi, uintD7ZkqU, uintSUqZWdc, uintN5D17G7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})