const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractCQFt489 = await IERC721Receiver.new({from: accounts[4]});
		const dataAPUVl9C = "0x120a0111021513050b0d1f0414150908060d011406161f1c031304041d1110"
		const tokenIdsVkzyeb = BigInt("1440")
		const fromTKZNCt9 = accounts[2]
		const operatorUmGpI3h = accounts[3]
		const datadDso2DM = "0x161d0b0d0010130316190c15160420"
		const tokenIdfjsveAB = BigInt("611")
		const fromh8M3ijJ = accounts[4]
		const operatorG7YsiZJ = accounts[1]
		const dataqHMpobs = "0x14151e091d1918060e"
		const tokenIdLUaTiSX = BigInt("1039")
		const fromdj0lAUU = accounts[3]
		const operatorj8Al1MD = accounts[4]
		const datasyOF3j6 = "0x0e15030018141f1d011f0e1217010a16092003"
		const tokenIdmngAic9 = BigInt("961")
		const fromFVAdaB = accounts[2]
		const operatorwm4a2VN = accounts[4]
		const dataSoNTmMC = "0x0a000b0d080f070b0d171c100f181a0719"
		const tokenIdIG8QQby = BigInt("1965")
		const fromgUgHcok = accounts[1]
		const operatorOF9J5xZ = accounts[4]
		const dataWnIXe2x = "0x180110191b0603011907100905190f1912110a04121b1820010d1412011d0d"
		const tokenIdIyiw299 = BigInt("829")
		const fromS0PXGS = accounts[0]
		const operatorpNjshB = "0x0000000000000000000000000000000000000001"
		const nullDpZXGph = await contractCQFt489.onERC721Received.call(operatorUmGpI3h, fromTKZNCt9, tokenIdsVkzyeb, dataAPUVl9C, {from: accounts[3]});
		const nulluMcVEyf = await contractCQFt489.onERC721Received.call(operatorG7YsiZJ, fromh8M3ijJ, tokenIdfjsveAB, datadDso2DM, {from: accounts[3]});
		const nullTGmDsg = await contractCQFt489.onERC721Received.call(operatorj8Al1MD, fromdj0lAUU, tokenIdLUaTiSX, dataqHMpobs, {from: accounts[1]});
		const nulljXxO0yf = await contractCQFt489.onERC721Received.call(operatorwm4a2VN, fromFVAdaB, tokenIdmngAic9, datasyOF3j6, {from: accounts[0]});
		const nullRyfOSOH = await contractCQFt489.onERC721Received.call(operatorOF9J5xZ, fromgUgHcok, tokenIdIG8QQby, dataSoNTmMC, {from: accounts[4]});
		const nullSOgVsa = await contractCQFt489.onERC721Received.call(operatorpNjshB, fromS0PXGS, tokenIdIyiw299, dataWnIXe2x, {from: accounts[4]});
	});
})