const UNIWHALE_ERC20 = artifacts.require("UNIWHALE_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UNIWHALE_ERC20', (accounts) => {
	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20cK94X1G = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintJ1I5soe = BigInt("1655")
		const uintBXVlBOB = BigInt("547")
		const uintXx8cpsO = BigInt("1203")
		const uintkIufgNN = BigInt("526")
		const uinttm31A5G = BigInt("653")
		const addressIOyMktG = accounts[1]
		const uintEwZKH7 = BigInt("1718")
		const uintJZ66OHe = BigInt("1843")
		const uintSryXLVC = BigInt("813")
		const uintyRROXd = BigInt("1")
		const addressLVwDNXy = accounts[0]
		const uint256qiavPoi = await UNIWHALE_ERC20cK94X1G.startSale.call(uinttm31A5G, uintkIufgNN, uintXx8cpsO, uintBXVlBOB, uintJ1I5soe, {from: accounts[0]});
		const uint256ZZ2TlIX = await UNIWHALE_ERC20cK94X1G.viewSale.call({from: accounts[0]});
		const boolmbInbf4 = await UNIWHALE_ERC20cK94X1G.getAirdrop.call(addressIOyMktG, {from: accounts[1]});
		const uint256Ma69WEd = await UNIWHALE_ERC20cK94X1G.startAirdrop.call(uintyRROXd, uintSryXLVC, uintJZ66OHe, uintEwZKH7, {from: accounts[3]});
		const boolUzbSxI3 = await UNIWHALE_ERC20cK94X1G.tokenSale.call(addressLVwDNXy, {from: accounts[0]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20rizGqEl = await UNIWHALE_ERC20.new({from: accounts[3]});
		const uintgXIB3Yr = BigInt("1029")
		const uintcrF63Hj = BigInt("959")
		const uintKBM3bc = BigInt("1336")
		const uintByDFIeE = BigInt("674")
		const uintAVNxun = BigInt("1622")
		const uintYgspArS = BigInt("359")
		const uintrcIS23Z = BigInt("88")
		const uintfOwgKG6 = BigInt("1435")
		const uintZghlk7 = BigInt("581")
		const uintyJAIkbV = BigInt("1427")
		const addresss702Be4 = accounts[2]
		const uint256rkfyeDn = await UNIWHALE_ERC20rizGqEl.viewAirdrop.call({from: accounts[0]});
		const uint256jdrAn5g = await UNIWHALE_ERC20rizGqEl.startSale.call(uintAVNxun, uintByDFIeE, uintKBM3bc, uintcrF63Hj, uintgXIB3Yr, {from: accounts[0]});
		const uint256Uwztxia = await UNIWHALE_ERC20rizGqEl.startSale.call(uintyJAIkbV, uintZghlk7, uintfOwgKG6, uintrcIS23Z, uintYgspArS, {from: accounts[1]});
		const bool6yAyBB = await UNIWHALE_ERC20rizGqEl.tokenSale.call(addresss702Be4, {from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20z0mq8Rv = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressF60pTkz = accounts[3]
		const addressEq5U4xD = accounts[1]
		const uint256cRh0IvE = await UNIWHALE_ERC20z0mq8Rv.viewSale.call({from: accounts[4]});
		await UNIWHALE_ERC20z0mq8Rv.clearETH.call({from: accounts[0]});
		const boolLASucTs = await UNIWHALE_ERC20z0mq8Rv.tokenSale.call(addressF60pTkz, {from: accounts[1]});
		const boolOQMIxUQ = await UNIWHALE_ERC20z0mq8Rv.tokenSale.call(addressEq5U4xD, {from: accounts[3]});
		const uint256DKUIRRi = await UNIWHALE_ERC20z0mq8Rv.viewAirdrop.call({from: accounts[5]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20Cv0VdSt = await UNIWHALE_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqY1iykT = accounts[1]
		const uintXihQtiK = BigInt("1302")
		const uintRpCgV7i = BigInt("1904")
		const uintdQjinxh = BigInt("939")
		const uintim9BT4s = BigInt("890")
		const uintWv4RiHU = BigInt("1447")
		const uint256Osbp9Tw = await UNIWHALE_ERC20Cv0VdSt.viewAirdrop.call({from: accounts[0]});
		const boolyC6suXH = await UNIWHALE_ERC20Cv0VdSt.getAirdrop.call(addressqY1iykT, {from: accounts[4]});
		const uint256AOjaaU5 = await UNIWHALE_ERC20Cv0VdSt.startSale.call(uintWv4RiHU, uintim9BT4s, uintdQjinxh, uintRpCgV7i, uintXihQtiK, {from: accounts[4]});
		const uint256QdeOaUN = await UNIWHALE_ERC20Cv0VdSt.viewSale.call({from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20KZoWwFy = await UNIWHALE_ERC20.new({from: accounts[3]});
		const addresso27W1To = accounts[3]
		const uintn63otZM = BigInt("2037")
		const uintzXcRj9M = BigInt("292")
		const uintGRtxe0T = BigInt("1533")
		const uint4W4EjS = BigInt("347")
		const uintcdgxSrT = BigInt("1582")
		const uintrAjQKMx = BigInt("1971")
		const uintjRca4aN = BigInt("1552")
		const uintzbHcICt = BigInt("1638")
		const uintqgEIiQA = BigInt("1808")
		const boolFV3vpnU = await UNIWHALE_ERC20KZoWwFy.getAirdrop.call(addresso27W1To, {from: accounts[3]});
		const uint256MfhwRJ2 = await UNIWHALE_ERC20KZoWwFy.startSale.call(uintcdgxSrT, uint4W4EjS, uintGRtxe0T, uintzXcRj9M, uintn63otZM, {from: accounts[1]});
		const uint2562EpA7O = await UNIWHALE_ERC20KZoWwFy.startAirdrop.call(uintqgEIiQA, uintzbHcICt, uintjRca4aN, uintrAjQKMx, {from: accounts[1]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20z0mq8Rv = await UNIWHALE_ERC20.new({from: accounts[4]});
		const addressuf7Ct6 = accounts[3]
		const addressgkHq4uA = accounts[1]
		const uint256cRh0IvE = await UNIWHALE_ERC20z0mq8Rv.viewSale.call({from: accounts[4]});
		await UNIWHALE_ERC20z0mq8Rv.clearETH.call({from: accounts[4]});
		const boolLASucTs = await UNIWHALE_ERC20z0mq8Rv.tokenSale.call(addressuf7Ct6, {from: accounts[1]});
		const uint256NbZxs2o = await UNIWHALE_ERC20z0mq8Rv.viewSale.call({from: accounts[0]});
		const boolOQMIxUQ = await UNIWHALE_ERC20z0mq8Rv.tokenSale.call(addressgkHq4uA, {from: accounts[3]});
		const uint256DKUIRRi = await UNIWHALE_ERC20z0mq8Rv.viewAirdrop.call({from: accounts[5]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20AwMGSp4 = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintLWKwJa3 = BigInt("316")
		const uintNjvYEI = BigInt("461")
		const uintggscN0I = BigInt("1258")
		const uintxkA7Hev = BigInt("918")
		const uintflVVBCA = BigInt("1130")
		const uint256ErQqhoM = await UNIWHALE_ERC20AwMGSp4.startSale.call(uintflVVBCA, uintxkA7Hev, uintggscN0I, uintNjvYEI, uintLWKwJa3, {from: accounts[4]});
	});

	it('test for UNIWHALE_ERC20', async () => {
		const UNIWHALE_ERC20z0mq8Rv = await UNIWHALE_ERC20.new({from: accounts[4]});
		const uintBTZcpX2 = BigInt("551")
		const uintzYQX3vF = BigInt("1559")
		const uintpkHuVbO = BigInt("459")
		const uintdtJFaKD = BigInt("516")
		const addressDs34Wok = accounts[3]
		const uintYnsEEZH = BigInt("573")
		const uintrU3DRqS = BigInt("1978")
		const uintmltYWSs = BigInt("894")
		const uintaQWmJLf = BigInt("1780")
		const uinty9Q83x8 = BigInt("191")
		const uint256cRh0IvE = await UNIWHALE_ERC20z0mq8Rv.viewSale.call({from: accounts[4]});
		const uint256qvf0KbP = await UNIWHALE_ERC20z0mq8Rv.startAirdrop.call(uintdtJFaKD, uintpkHuVbO, uintzYQX3vF, uintBTZcpX2, {from: accounts[4]});
		await UNIWHALE_ERC20z0mq8Rv.clearETH.call({from: accounts[4]});
		const boolLASucTs = await UNIWHALE_ERC20z0mq8Rv.tokenSale.call(addressDs34Wok, {from: accounts[1]});
		const uint256xIXuX1l = await UNIWHALE_ERC20z0mq8Rv.startSale.call(uinty9Q83x8, uintaQWmJLf, uintmltYWSs, uintrU3DRqS, uintYnsEEZH, {from: accounts[0]});
		const uint256NbZxs2o = await UNIWHALE_ERC20z0mq8Rv.viewSale.call({from: accounts[0]});
	});
})