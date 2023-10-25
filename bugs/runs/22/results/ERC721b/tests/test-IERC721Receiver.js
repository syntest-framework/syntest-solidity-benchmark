const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractuUk4vK = await IERC721Receiver.new({from: accounts[0]});
		const dataH0SwZyn = "0x191d060f1e1e13"
		const tokenIdgxWVYP6 = BigInt("829")
		const fromH76nGTi = accounts[3]
		const operatorfRgGX8D = accounts[4]
		const datakAlaxC2 = "0x1f0b150b"
		const tokenIdEKOacU8 = BigInt("1286")
		const fromQwM9lfU = accounts[3]
		const operatorqOu8B4r = accounts[0]
		const datafMzwLkX = "0x02"
		const tokenIdlLgvs8V = BigInt("1432")
		const fromleG7jhj = accounts[2]
		const operatorKUedvzj = accounts[4]
		const nullIVcpG3j = await contractuUk4vK.onERC721Received.call(operatorfRgGX8D, fromH76nGTi, tokenIdgxWVYP6, dataH0SwZyn, {from: accounts[5]});
		const nullmalBnc5 = await contractuUk4vK.onERC721Received.call(operatorqOu8B4r, fromQwM9lfU, tokenIdEKOacU8, datakAlaxC2, {from: accounts[1]});
		const nullHLphwZj = await contractuUk4vK.onERC721Received.call(operatorKUedvzj, fromleG7jhj, tokenIdlLgvs8V, datafMzwLkX, {from: accounts[4]});
	});
})